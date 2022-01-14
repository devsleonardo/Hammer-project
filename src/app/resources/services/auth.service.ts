import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token_id: string;
  constructor(private http: HttpClient, private router: Router) {}

  public login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/login`, { email, senha }).pipe(
      switchMap((idToken: { token: string }) => {
        window.localStorage.setItem('idToken', idToken.token); // Mander persistencia no browser
        this.token_id = idToken.token;
        return of(idToken);
      })
    );
  }

  public logout(): void {
    window.localStorage.removeItem('idToken');
    this.router.navigate(['login']);
  }

  public getAuthorizationToken() {
    const token = window.localStorage.getItem('idToken');
    return token;
  }

  public authValidade(): boolean {
    if (this.token_id === undefined && localStorage.getItem('idToken') !== null) {
      this.token_id = localStorage.getItem('idToken');
    }
    if (this.token_id === undefined) {
      this.router.navigate(['login']);
    }
    return this.token_id !== undefined;
  }
}
