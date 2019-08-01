import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { AppCheckboxComponent } from './components/app-checkbox/app-checkbox.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

// Add material dependencies
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppTableComponent,
    AppInputComponent,
    AppCheckboxComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule
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
    MatSidenavModule
  ]
})
export class SharedModule { }
