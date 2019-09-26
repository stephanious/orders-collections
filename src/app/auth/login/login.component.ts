import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authservice.GoogleAuth();
  }

  logout() {
    this.authservice.logout();
  }

}
