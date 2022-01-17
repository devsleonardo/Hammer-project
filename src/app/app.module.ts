import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Modules
import { PagesModule } from './pages/pages.module';
import { LoaderModule } from './resources/components/loader.module';

//Services
import { AuthService } from './resources/services/auth.service';
import { AuthGuard } from './resources/services/auth-guard.service';
import { RegisterService } from './resources/services/register.service';
import { ApiService } from './resources/services/api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    LoaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard, AuthService, RegisterService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
