import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PublicacionesCrearComponent } from './publicaciones/publicaciones-crear/publicaciones-crear.component';
import { PublicacionesListarComponent } from './publicaciones/publicaciones-listar/publicaciones-listar.component';
import { PublicacionesModificarComponent } from './publicaciones/publicaciones-modificar/publicaciones-modificar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';
import { CategoriaIndexComponent } from './categoria/categoria-index/categoria-index.component';
import { CategoriaUpdateComponent } from './categoria/categoria-update/categoria-update.component';
import { ProductoIndexComponent } from './producto/producto-index/producto-index.component';
import { ProductoCreateComponent } from './producto/producto-create/producto-create.component';
import { ProductoUpdateComponent } from './producto/producto-update/producto-update.component';



@NgModule({
  declarations: [AdminComponent, ProductoComponent, ProveedorComponent, CategoriaComponent, NavbarComponent, PublicacionesComponent, PublicacionesCrearComponent, PublicacionesListarComponent, PublicacionesModificarComponent, CategoriaCreateComponent, CategoriaIndexComponent, CategoriaUpdateComponent, ProductoIndexComponent, ProductoCreateComponent, ProductoUpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule
    
  ]
})
export class AdminModule { }
