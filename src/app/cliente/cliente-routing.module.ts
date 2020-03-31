import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: '',
        component:InicioComponent
      },
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path: 'registro',
        component:RegistroComponent
      },
      {
        path: 'contacto',
        component:ContactoComponent
      }
      
    ]
    
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClienteRoutingModule { }
