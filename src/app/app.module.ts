import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './Usuarios/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
