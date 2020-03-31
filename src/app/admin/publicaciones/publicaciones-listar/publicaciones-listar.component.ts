import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../publicaciones.service';

@Component({
  selector: 'app-publicaciones-listar',
  templateUrl: './publicaciones-listar.component.html',
  styleUrls: ['./publicaciones-listar.component.css']
})
export class PublicacionesListarComponent implements OnInit {

  publicaciones: any = [];

  

  constructor(protected publicacionesService:PublicacionesService) {
    this.publicacionesService.lista().subscribe(
      (res: any) =>{
        console.log(res);
        this.publicaciones = res;
      },
      (error: any) =>{
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
