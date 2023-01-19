import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component'; 
import { AppRoutingModule } from './app-routing-module';

// Interceptors
import { InterceptorService } from './Interceptor/interceptor.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }