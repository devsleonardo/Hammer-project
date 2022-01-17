import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

//Model
import { ModelCadastro } from './../model/ModelCadastro';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public register(requestCadastro: ModelCadastro): Observable<ModelCadastro> {
    return this.http.post<ModelCadastro>(`${environment.api}/cadastro`, requestCadastro);
  }
}
