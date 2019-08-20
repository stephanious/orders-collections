import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-pending-draft',
  templateUrl: './app-sidebar-pending-draft.component.html',
  styleUrls: ['./app-sidebar-pending-draft.component.scss']
})
export class AppSidebarPendingDraftComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'chat',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/chat-bubble-icon.svg'));
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/delete-icon-gray.svg'));
  }

  ngOnInit() {
  }

}
