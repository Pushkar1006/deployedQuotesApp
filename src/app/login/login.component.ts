import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authserv : AuthService) { }

  ngOnInit(): void {
  }

  email = new FormControl("", [
    Validators.required,
    Validators.email
  ])

  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ])

  loginForm = new FormGroup({
    email : this.email,
    password : this.password
  })

  login(){
   // console.log(this.loginForm.value);
    this.authserv.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  reset(){
    this.loginForm.reset();
  }

}
