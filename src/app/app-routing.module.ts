import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './cliente/login/login.component';
import { InicioComponent } from './cliente/inicio/inicio.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { PublicacionesComponent } from './admin/publicaciones/publicaciones.component';
import { PublicacionesListarComponent } from './admin/publicaciones/publicaciones-listar/publicaciones-listar.component';
import { PublicacionesCrearComponent } from './admin/publicaciones/publicaciones-crear/publicaciones-crear.component';
import { PublicacionesModificarComponent } from './admin/publicaciones/publicaciones-modificar/publicaciones-modificar.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    /*loadChildren: './cliente/cliente.module#ClienteModule'*/

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
  },
  {
    path: 'acerca',
    component: AcercaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  }
  
    
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
