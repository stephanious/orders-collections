import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'bell-icon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/img/icons/bell-icon.svg'));
  }


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

}
