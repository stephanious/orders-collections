
import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
      firebase.initializeApp({
        apiKey: "AIzaSyDc0M55B3jSmMNk2dh3kxX64EDmG8DCeU4"
      });
  }
}
