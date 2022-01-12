import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public token_id: string;
  constructor(private http: HttpClient, private router: Router) {}

  public login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/login`, { email, senha }).pipe(
      switchMap((idToken: { token: string }) => {
        this.token_id = idToken.token;
        console.log(this.token_id);
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
      this.router.navigate(['']);
    }
    return this.token_id !== undefined;
  }

  public logout(): void {
    localStorage.removeItem('idToken');
    this.token_id = undefined;
    this.router.navigate(['']);
  }

  public register(email: string, nome: string, senha: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/cadastro`, {
      email,
      nome,
      senha,
    });
  }

  public tabela() {
    return this.http.get(`${environment.api}/tabela`);
  }
}
