import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Module Routing
import { RoutingModule } from './routing.module';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FormularioComponent } from './formulario/formulario.component';

//Interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { idTokenInterceptor } from './inteceptor/idToken.Interceptor';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TabelaComponent,
    FormularioComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RoutingModule, ReactiveFormsModule, FormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: idTokenInterceptor, multi: true }],
})
export class PagesModule {}
