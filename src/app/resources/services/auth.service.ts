import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

//Model
import { ModelLogin } from '../model/ModelLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public login(user: ModelLogin): Observable<any> {
    return this.http.post<any>(`${environment.api}/login`, user).pipe(
      switchMap((idToken: { token: string }) => {
        localStorage.setItem('idToken', idToken.token); // Mander persistencia no browser
        return of(idToken);
      })
    );
  }

  get token_id() {
    return localStorage.getItem('idToken');
  }

  public logout(): void {
    localStorage.removeItem('idToken');
    this.router.navigate(['login']);
  }

  public getAuthorizationToken() {
    const token = localStorage.getItem('idToken');
    return token;
  }

  public authValidade(): boolean {
    if (this.token_id === undefined && localStorage.getItem('idToken') !== null) {
    }
    return this.token_id !== undefined;
  }
}
