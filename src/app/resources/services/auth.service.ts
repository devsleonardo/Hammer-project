import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, of, switchMap } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token_id: string;
  constructor(private http: HttpClient, private router: Router) {}

  public login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/login`, { email, senha }).pipe(
      switchMap((idToken: { token: string }) => {
        this.token_id = idToken.token;
        localStorage.setItem('idToken', idToken.token); // Mander persistencia no browser
        return of(idToken);
      })
    );
  }

  public authValidade(): boolean {
    if (this.token_id === undefined && localStorage.getItem('idToken') !== null) {
      this.token_id = localStorage.getItem('idToken');
    }
    if (this.token_id === undefined) {
      this.router.navigate(['/']);
    }
    return this.token_id !== undefined;
  }

  public logout(): void {
    localStorage.removeItem('idToken');
    this.token_id = undefined;
    this.router.navigate(['/']);
  }
}
