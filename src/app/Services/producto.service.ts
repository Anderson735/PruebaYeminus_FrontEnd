import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoDTO } from '../Interfaces/producto';
import { enviroment } from '../Environments/environments';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private endPoint:string = enviroment.endPoint;
  private apiUrl:string = this.endPoint + 'api/producto/';
  constructor(private http: HttpClient) {}

  GetListProductos(): Observable<ProductoDTO[]> {
    return this.http.get<any>(`${this.apiUrl}GetProductos`).pipe(
      map(response => response.$values.map((item: any) => ({
        Codigo: item.codigo,
        Descripcion: item.descripcion,
        ListaDePrecios: item.listaDePrecios.$values,
        Imagen: item.imagen,
        ProductoParaLaVenta: item.productoParaLaVenta,
        PorcentajeIva: item.porcentajeIva
      })))
    );
  }
  PostProducto(modelo: ProductoDTO): Observable<ProductoDTO> {
    return this.http.post<ProductoDTO>(`${this.apiUrl}AgregarProducto`, modelo);
  }

  PutProducto(codigo: string, modelo: ProductoDTO): Observable<ProductoDTO> {
    return this.http.put<ProductoDTO>(`${this.apiUrl}EditarProducto/${codigo}`, modelo);
  }

  DeleteProducto(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}EliminarProducto/${codigo}`);
  }
}