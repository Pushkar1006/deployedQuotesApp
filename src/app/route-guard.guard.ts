import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {

  constructor(private authserv : AuthService){
  }

  canActivate(){
    return this.authserv.isAuthenticated();
  }
}
