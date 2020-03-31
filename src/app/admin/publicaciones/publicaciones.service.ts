import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(protected http:HttpClient) { }

  lista(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  guardar(datos:any){
    return this.http.post("https://jsonplaceholder.typicode.com/posts",datos);
  }
}
