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

//Services
import { ApiService } from './services/api.service';
import { AuthGuard } from './services/auth-guard.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ApiService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
