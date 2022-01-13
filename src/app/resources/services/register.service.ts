import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

//Model
import { RequestCadastro } from './../model/requestCadastro';
import { ResponseCadastro } from '../model/responseCadastro';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public token_id: string;
  constructor(private http: HttpClient) {}

  public register(requestCadastro: RequestCadastro): Observable<ResponseCadastro> {
    return this.http.post<ResponseCadastro>(`${environment.api}/cadastro`, requestCadastro);
  }
}
