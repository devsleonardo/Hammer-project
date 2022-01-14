import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getTabela() {
    return this.http.get(`${environment.api}/tabela`);
  }
}
