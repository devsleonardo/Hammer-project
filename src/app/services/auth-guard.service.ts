import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private apiService: ApiService) {}

  canActivate(): boolean {
    return this.apiService.authValidade();
  }
}
