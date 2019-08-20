import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/menu-icon.svg'));
    iconRegistry.addSvgIcon(
        'dashboard',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/dashboard-icon.svg'));
    iconRegistry.addSvgIcon(
        'orders',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/collection-icon.svg'));
    iconRegistry.addSvgIcon(
        'collections',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/receipt-icon.svg'));
  }

  ngOnInit() {
  }

}
