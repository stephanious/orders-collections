import { SharedModule } from './../shared/shared.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { FooterComponent } from './footer/footer.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppSidebarComponent } from './left-sidebar/app-sidebar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    FooterComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    
    LoaderComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AppHeaderComponent, AppSidebarComponent],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ]
})
export class CoreModule {}
