import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';
import { CarritoComponent } from './carrito/carrito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './cliente/cliente.component';
import { InicioComponent } from './cliente/inicio/inicio.component';
import { LoginComponent } from './cliente/login/login.component';
import { RegistroComponent } from './cliente/registro/registro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    AcercaComponent,
    CarritoComponent,
    ClienteComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
