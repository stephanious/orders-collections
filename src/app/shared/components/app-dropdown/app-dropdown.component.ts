import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.scss']
})
export class AppDropdownComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Christine Osbourne', 'hristine Osbourne', 'hristine Osbourne', 'hristine Osbourne', 'hristine Osbourne', 'hristine Osbourne'];

  constructor() { }

  ngOnInit() {
  }

}
