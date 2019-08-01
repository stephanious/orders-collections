import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger  } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
  }

  triggerMenu() {
    this.trigger.openMenu();
  }
}
