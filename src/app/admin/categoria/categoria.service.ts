import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from "./../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  base = environment.servidor
  reqHeader: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + atob(localStorage.getItem('token'))
    })
   }

  listar(){
    return this.http.get(this.base + "/categoria", { headers: this.reqHeader});
  }

  guardar(datos){
    return this.http.post(this.base + "/categoria"+ datos, { headers: this.reqHeader});
  }

  mostrar(id: Number){
    return this.http.get(this.base + "/categoria"+id, { headers: this.reqHeader});

  }
  modificar(datos, id: Number){
    return this.http.put(this.base + "/categoria"+id, datos,{ headers: this.reqHeader});
  }
  eliminar(id: Number){
    return this.http.delete(this.base + "/categoria"+id, { headers: this.reqHeader});

  }
}
