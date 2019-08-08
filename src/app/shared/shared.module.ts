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
  MatSidenavModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRightSidebarComponent } from './components/app-right-sidebar/app-right-sidebar.component';
import { AppSidebarDraftComponent } from './components/app-sidebar-draft/app-sidebar-draft.component';
import { AppSidebarPendingDraftComponent } from './components/app-sidebar-pending-draft/app-sidebar-pending-draft.component';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppTableComponent,
    AppInputComponent,
    AppCheckboxComponent,
    AppRightSidebarComponent,
    AppSidebarDraftComponent,
    AppSidebarPendingDraftComponent,
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppTableComponent,
    AppInputComponent,
    AppCheckboxComponent,
    AppRightSidebarComponent,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatSidenavModule, 
    MatIconModule,
    MatToolbarModule,
    MatCardModule, 
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ]
})
export class SharedModule { }
