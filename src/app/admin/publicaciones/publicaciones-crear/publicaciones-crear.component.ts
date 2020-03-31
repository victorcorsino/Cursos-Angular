import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PublicacionesService } from '../publicaciones.service';

@Component({
  selector: 'app-publicaciones-crear',
  templateUrl: './publicaciones-crear.component.html',
  styleUrls: ['./publicaciones-crear.component.css']
})
export class PublicacionesCrearComponent implements OnInit {

  publicacionForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl('1')
  });

  constructor(protected publicacionesService: PublicacionesService) { }

  ngOnInit() {
  }

  guardar() {
    this.publicacionesService.guardar(this.publicacionForm.value).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
