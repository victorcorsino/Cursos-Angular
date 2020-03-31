import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionesListarComponent } from './publicaciones/publicaciones-listar/publicaciones-listar.component';
import { PublicacionesCrearComponent } from './publicaciones/publicaciones-crear/publicaciones-crear.component';
import { PublicacionesModificarComponent } from './publicaciones/publicaciones-modificar/publicaciones-modificar.component';
import { CategoriaIndexComponent } from './categoria/categoria-index/categoria-index.component';
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './categoria/categoria-update/categoria-update.component';
import { ProductoIndexComponent } from './producto/producto-index/producto-index.component';
import { ProductoCreateComponent } from './producto/producto-create/producto-create.component';
import { ProductoUpdateComponent } from './producto/producto-update/producto-update.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'categoria',
        component:CategoriaComponent,
        children:[
          {
            path: '',
            component: CategoriaIndexComponent
          },
          {
            path: 'crear',
            component: CategoriaCreateComponent
          },
          {
            path: ':id/modificar',
            component: CategoriaUpdateComponent
          }
        ]
      },
      {
        path: 'producto',
        component:ProductoComponent,
        children:[
          {
            path: '',
            component: ProductoIndexComponent,
          },
          {
            path: 'crear',
            component: ProductoCreateComponent,
          },
          {
            path: ':id/modificar',
            component: ProductoUpdateComponent
          }
        ]
      },
      {
        path: 'proveedor',
        component:ProveedorComponent
      },
      {
        path: 'publicaciones',
        component: PublicacionesComponent,
        children: [
          {
            path: '',
            component: PublicacionesListarComponent
          },
          {
            path: 'crear',
            component: PublicacionesCrearComponent
          },
          {
            path: 'id/modificar',
            component: PublicacionesModificarComponent
          }
        ]
      }
       
    ]
    
  }
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
