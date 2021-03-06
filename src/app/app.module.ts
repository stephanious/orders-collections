import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Application modules
import { SharedModule } from './shared/shared.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { CollectionsModule } from './collections/collections.module';
import { OrdersModule } from './orders/orders.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    DashboardModule,
    OrdersModule,
    CollectionsModule,
    CoreModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
