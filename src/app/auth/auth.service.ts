// import * as firebase from 'firebase';
import { RouterModule, Routes, Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { NgZone as zone } from '@angular/core';


export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    public zone:zone
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

// Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      this.zone.run(() => this.router.navigate(['/collections']));
    }).catch((error) => {
        console.log(error)
    })
  }

  logout() {
    this.afAuth.auth.signOut()
    .then((result) => {
      console.log("logged out")
    }).catch((error) => {
        console.log(error)
    })
  }
}
