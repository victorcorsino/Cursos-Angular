import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  
  constructor(protected categoriaService: CategoriaService) { 
    this.categoriaService.listar().subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
