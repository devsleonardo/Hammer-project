import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

//Service
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  /*
  canActivate(): boolean {
    return this.authService.authValidade();
  }*/

  canActivate() {
    if (localStorage.getItem('idToken')) {
      return this.authService.authValidade();
    }
    this.router.navigate(['login']);
    return false;
  }
}
