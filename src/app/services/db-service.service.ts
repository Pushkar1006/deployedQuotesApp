import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import * as M from 'materialize-css';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private authserv : AuthService) { }

  saveQuote(quote : string){
    firebase.firestore().collection("quotes").add({
      text : quote,
      by : this.authserv.getUserId()
    }).then(() => {
      M.toast({html: 'Quote saved successfully!', classes:'green', inDuration:100,
      outDuration:100, displayLength:2000});
    }).catch((err) => {
      console.log(err);
      M.toast({html: 'Error creating quote!', classes:'red', inDuration:100,
      outDuration:100, displayLength:2000});
    })
  }

  getAllQuotes(){
    return firebase.firestore().collection("quotes").get();
  }

}
