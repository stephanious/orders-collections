import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.authservice.login(email, pass);
  }

}
