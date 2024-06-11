import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjercicioEncriptacionDesencriptacion } from '../Interfaces/ejercicio-encriptacion-desencriptacion';
import { EjercicioFibonacci } from '../Interfaces/ejercicio-fibonacci';
import { enviroment } from '../Environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private endPoint:string = enviroment.endPoint;
  private apiUrl:string = this.endPoint + 'api/ejercicios/';
  constructor(private http:HttpClient) { }

  EncripartarPalabra(palabra:string):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}EncriptarPalabra`,palabra)
  };

  DesencripartarPalabra(palabra:string):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}DesencriptarPalabra`,palabra)
  };

  ValidarFibonacci(numero: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}ValidarNumero`, { numero }); // Envía un objeto con la propiedad numero
  }
}
