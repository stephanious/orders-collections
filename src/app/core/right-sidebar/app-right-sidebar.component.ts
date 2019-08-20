import { Component, OnInit, ElementRef } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './app-right-sidebar.component.html',
  styleUrls: ['./app-right-sidebar.component.scss']
})
export class AppRightSidebarComponent implements OnInit {
  el: ElementRef;
  status: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, el: ElementRef) { 
    iconRegistry.addSvgIcon(
      'info-count',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/right-info-count.svg'));
    this.el = el; 
  }

  ngOnInit() {
  }

  clickEvent () {
    this.status = !this.status;   
  }

}
