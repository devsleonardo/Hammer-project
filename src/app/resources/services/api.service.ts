import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getTabela(): Observable<any> {
    return this.http.get(`${environment.api}/tabela`);
  }

  getFormulario() {
    return this.http.get(`${environment.api}/formulario`);
  }

  postFormulario(data: any) {
    return this.http.post(`${environment.api}/formulario`, data);
  }
}
