import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route : Router, private authServ : AuthService) { }

  ngOnInit(): void {
  }

  login(registerForm : NgForm){
   // console.log(registerForm.value);
    this.authServ.register(registerForm.value.email, registerForm.value.password);
    this.route.navigate(["/login"]);
  }

  reset(registerForm : NgForm){
    registerForm.reset();
  }

}
