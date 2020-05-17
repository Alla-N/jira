import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserService } from '../services/user/user.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private jwtHelper: JwtHelperService
  ) { }

  canActivate() {
    let isExpired;
    this.userService.getToken()
      .subscribe(data => {
        isExpired = this.jwtHelper.isTokenExpired(data);
      });

    if (isExpired) {
      alert('You should login at first');
      this.router.navigate(['/login'] );
      return false;
    }
    return true;
  }
}
