import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  token: any;

  canActivate() {

    this.token = localStorage.getItem('token')?localStorage.getItem('token'):'';
    if(this.token === '') {
      return false;
    } else {
      return true;
    }
  }

}
