import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-index',
  templateUrl: './categoria-index.component.html',
  styleUrls: ['./categoria-index.component.css']
})
export class CategoriaIndexComponent implements OnInit {
  categorias: any = [];
  
  constructor(protected categoriaService: CategoriaService) { 
    this.categoriaService.listar().subscribe(
      (res: any) => {
        console.log(res);
        this.categorias = res.datos;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

  eliminar(id, index) {
    this.categoriaService.eliminar(id).subscribe(
      (res: any) => {
        console.log(res);
        this.categorias.splice(index, 1);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
