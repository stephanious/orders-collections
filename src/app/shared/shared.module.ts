import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTableComponent } from './components/app-table/app-table.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { AppCheckboxComponent } from './components/app-checkbox/app-checkbox.component';


// Add material dependencies
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppBreadcrumbComponent } from './components/app-breadcrumb/app-breadcrumb.component';
import { AppDropdownComponent } from './components/app-dropdown/app-dropdown.component';
import { AppSectionHeaderComponent } from './components/app-section-header/app-section-header.component';



@NgModule({
  declarations: [
    AppTableComponent,
    AppInputComponent,
    AppCheckboxComponent,
    AppBreadcrumbComponent,
    AppDropdownComponent,
    AppSectionHeaderComponent,
    
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule
  ],
  exports: [
    AppTableComponent,
    AppInputComponent,
    AppCheckboxComponent,
    AppBreadcrumbComponent,
    AppDropdownComponent,
    AppSectionHeaderComponent,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    
  ]
})
export class SharedModule { }
