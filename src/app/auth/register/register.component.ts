import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  // register(form: NgForm) {
  //   alert(form.value.email);
  //   const email = form.value.email;
  //   const pass = form.value.password;
  //   this.authservice.register(email, pass);
  // }
}
