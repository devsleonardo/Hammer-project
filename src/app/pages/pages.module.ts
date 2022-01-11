import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, TabelaComponent, FormularioComponent],
  imports: [CommonModule, RoutingModule],
})
export class PagesModule {}
