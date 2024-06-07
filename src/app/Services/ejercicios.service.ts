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

  EncripartarPalabra(palabra:string):Observable<string>{
    return this.http.post<string>(`${this.apiUrl}EncriptarPalabra`,palabra)
  };

  DesencripartarPalabra(palabra:string):Observable<string>{
    return this.http.post<string>(`${this.apiUrl}DesencriptarPalabra`,palabra)
  };

  ValidarFibonacci(numero:number):Observable<number>{
    return this.http.post<number>(`${this.apiUrl}ValidarNumero`,numero)
  }
}
