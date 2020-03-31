import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  titulo: String;
  cantidad: Number;
  estado: boolean = false;
  categorias: String[];
  producto: any = {};
  lista_productos: any = [];
  carrito: any = [];
  cant_venta: number = 1;

  cliente = new FormControl;

  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    cantidad: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required)
  });

  constructor() {
    this.titulo = "Carrito de compras";
    this.cantidad = 30;
    this.categorias = ['ropa','juguetes','muebles','electronicos','autos']
    this.carrito = []

    this.producto ={
     nombre: "Chamarra",
     cantidad: 12,
     precio: 200
    }

    this.lista_productos.push(this.producto);
    this.lista_productos.push({nombre: "Silla", cantidad: 24, precio: 400});
    this.lista_productos.push({nombre: "Zapatos", cantidad: 6, precio: 350.99});
  }

  ngOnInit() {
  }

  cambiar_estado(){
    this.estado = !this.estado;
  }

  eliminar_producto(i){
    this.lista_productos.splice(i, 1);
  }

  agregar_carrito(prod){
    this.carrito.push({nombre: prod.nombre, precio: prod.precio, cantidad: this.cant_venta, subtotal:this.cant_venta*prod.precio});
  }

  modelChanged(e){
    this.cant_venta = e.target.value;
  }
  agregar_producto(){
    this.lista_productos.push(this.productoForm.value);
  }

}
