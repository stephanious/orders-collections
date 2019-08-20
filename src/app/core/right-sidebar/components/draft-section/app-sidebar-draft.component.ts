import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-sidebar-draft',
  templateUrl: './app-sidebar-draft.component.html',
  styleUrls: ['./app-sidebar-draft.component.scss']
})
export class AppSidebarDraftComponent implements OnInit {

  status: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'chat-black',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/chat-bubble-black-icon.svg'));
    iconRegistry.addSvgIcon(
      'more',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/more-icon-vertical.svg'));
  }

  ngOnInit() {
  }

  clickEvent () {
    this.status = !this.status;   
  }
  
}
