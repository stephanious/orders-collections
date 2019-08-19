import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter, distinctUntilChanged, map, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './app-breadcrumb.component.html',
  styleUrls: ['./app-breadcrumb.component.scss']
})
export class AppBreadcrumbComponent implements OnInit {

  public breadcrumbs: Breadcrumb[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let breadcrumb: Breadcrumb = {
      label: 'Something new',
      url: ''
    };

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      
      let root: ActivatedRoute = this.route.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      
       
    });

  }


  private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    
    let children: ActivatedRoute[] = route.children;

    
    if (children.length === 0) {
      return breadcrumbs;
    }

    
    for (let child of children) {
      
      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length==0) {
        continue;
      }
      
     
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
  
    url += `/${routeURL}`;

      
      let breadcrumb: Breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url
      };
      breadcrumbs.push(breadcrumb);

      
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

}

export interface Breadcrumb{
  label: string;
    url: string;
}
