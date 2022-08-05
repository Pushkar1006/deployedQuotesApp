import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as M from 'materialize-css';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId? : string;

  constructor(private route : Router) { }

  isAuthenticated() : boolean{
    const uId = sessionStorage.getItem('userId');
    if(uId){
      this.userId = uId;
    }
    return uId ? true : false;
  }

  getUserId(){
    return this.userId;
  }

  register(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password).then((userDetails:any) => {
     // console.log(userDetails);
      this.userId = userDetails.user.email;
     // console.log(this.userId);
      sessionStorage.setItem('userId', userDetails.user.email);
      M.toast({html: 'User registered successfully!', classes:'green', inDuration:100,
      outDuration:100, displayLength:2000});
    }).catch((err) => {
      console.log(err);
      M.toast({html: 'Error: User registration un-successful!', classes:'red', inDuration:100,
      outDuration:100, displayLength:2000});
    })
  }

  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then((userDetails:any) => {
      //console.log(userDetails);
      this.userId = userDetails.user.email;
      //console.log(this.userId);
      sessionStorage.setItem('userId', userDetails.user.email);
      M.toast({html: 'User Signed-in Successfully!', classes:'green', inDuration:100,
      outDuration:100, displayLength:2000});
      this.route.navigate(["/home"]);
    }).catch((err) => {
      console.log(err);
      M.toast({html: 'Error: User login un-successful!', classes:'red', inDuration:100,
      outDuration:100, displayLength:2000});
    })
  }

  logOut(){
    firebase.auth().signOut().then(
      () => {
        this.userId = undefined;
       // console.log("userId: " + this.userId);
        sessionStorage.removeItem('userId');
        M.toast(
          {
            html: 'User logged-out Successfully!',
            classes:'yellow black-text',
            inDuration:100,
            outDuration:100,
            displayLength:2000
          }
        );
        this.route.navigate(["/"]);
      });
  }

}
