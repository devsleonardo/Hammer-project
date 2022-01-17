import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

//Services
import { AuthService } from 'src/app/resources/services/auth.service';
import { LoaderService } from './../../resources/components/loader.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private loaderService: LoaderService) {}

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

    this.loaderService.show();
    //Retorno o request com o erro tratado
    return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
  }
}
