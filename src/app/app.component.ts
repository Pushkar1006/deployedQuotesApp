import { Component, OnInit } from '@angular/core';
import  firebase  from 'firebase/compat/app';
import { firebaseConfig } from './firebaseconfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'quotesApp';

  ngOnInit(){
    firebase.initializeApp(firebaseConfig);
  }
}
