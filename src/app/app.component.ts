import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Booksly';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyD0NLxDz9rEdECSqHx3WboHcI_tWY6Hr5U",
      authDomain: "bookslyy.firebaseapp.com",
      databaseURL: "https://bookslyy.firebaseio.com",
      projectId: "bookslyy",
      storageBucket: "bookslyy.appspot.com",
      messagingSenderId: "571182825669",
      appId: "1:571182825669:web:8c32275fc3cdcb0eb8b0ac"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
