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
import { HttpInterceptorProviders } from './inteceptor';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TabelaComponent,
    FormularioComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RoutingModule, ReactiveFormsModule, FormsModule],
  providers: [HttpInterceptorProviders],
})
export class PagesModule {}
