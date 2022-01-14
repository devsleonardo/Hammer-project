import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/resources/services/auth.service';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpEvent<any>
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    const token = this.authService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if (token) {
      //O request é imutavel, ou seja, não é possivel mudar nada
      //Faço o clone para conseguir mudar as propriedades
      //Passo token de autenticação do header
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    //Retorno o request com o erro tratado
    return next.handle(request);
  }
}
