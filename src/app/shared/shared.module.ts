import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { AppCheckboxComponent } from './components/app-checkbox/app-checkbox.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';


// Add material dependencies
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatSidenavModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRightSidebarComponent } from './components/app-right-sidebar/app-right-sidebar.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppTableComponent,
    AppInputComponent,
    AppCheckboxComponent,
    AppRightSidebarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppTableComponent,
    AppInputComponent,
    AppCheckboxComponent,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatSidenavModule, 
    MatIconModule,
    MatToolbarModule,
    MatCardModule, 
    AppRightSidebarComponent
  ]
})
export class SharedModule { }
