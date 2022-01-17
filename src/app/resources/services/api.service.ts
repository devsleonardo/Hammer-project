import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Model
import { ModelTabela } from '../model/modelTabela';
import { ModelFormularioGet } from '../model/modelFormularioGet';
import { ModelFormularioPost } from '../model/modelFormularioPost';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getTabela(): Observable<ModelTabela[]> {
    return this.http.get<ModelTabela[]>(`${environment.api}/tabela`);
  }

  getFormulario(): Observable<ModelFormularioGet[]> {
    return this.http.get<ModelFormularioGet[]>(`${environment.api}/formulario`);
  }

  postFormulario(post: ModelFormularioPost): Observable<ModelFormularioPost> {
    return this.http.post<ModelFormularioPost>(`${environment.api}/formulario`, post);
  }
}
