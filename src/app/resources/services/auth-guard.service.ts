import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

//Service
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return this.authService.authValidade();
  }
}
