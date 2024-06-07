import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Interfaces/producto';
import { enviroment } from '../Environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private endPoint:string = enviroment.endPoint;
  private apiUrl:string = this.endPoint + 'api/producto/';
  constructor(private http:HttpClient) { }

  GetListProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiUrl}GetProductos`);
  };

  PostProducto(modelo:Producto):Observable<Producto>{
    return this.http.post<Producto>(`${this.apiUrl}AgregarProducto`,modelo)
  };

  PutProducto(codigo:string, modelo:Producto):Observable<Producto>{
    return this.http.put<Producto>(`${this.apiUrl}EditarProducto/${codigo}`,modelo)
  };

  DeleteProducto(codigo:string):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}EliminarProducto/${codigo}`)
  };
}
