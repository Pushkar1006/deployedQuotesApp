import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authserv:AuthService) { }

  ngOnInit(): void {
  }

  isAuth() : boolean{
    return this.authserv.isAuthenticated();
  }

  logout(){
    this.authserv.logOut();
  }

}
