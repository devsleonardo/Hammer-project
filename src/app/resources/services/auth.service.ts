import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { RequestLogin } from '../model/requestLogin';
import { ResponseLogin } from './../model/responseLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token_id: string;
  constructor(private http: HttpClient, private router: Router) {}

  public login(requesteLogin: RequestLogin): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(`${environment.api}/login`, requesteLogin).pipe(
      switchMap((idToken: any) => {
        this.token_id = idToken.token;
        localStorage.setItem('idToken', idToken.token); // Mander persistencia no browser
        return of(idToken.token);
      })
    );
  }

  public authValidade(): boolean {
    if (this.token_id === undefined && localStorage.getItem('idToken') !== null) {
      this.token_id = localStorage.getItem('idToken');
    }
    if (this.token_id === undefined) {
      this.router.navigate(['']);
    }
    return this.token_id !== undefined;
  }

  public logout(): void {
    localStorage.removeItem('idToken');
    this.token_id = undefined;
    this.router.navigate(['']);
  }
}
