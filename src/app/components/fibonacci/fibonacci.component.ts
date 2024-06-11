import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EjerciciosService } from '../../Services/ejercicios.service';

@Component({
  selector: 'app-fibonacci',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Importa HttpClientModule
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css'],
  providers: [EjerciciosService] // Proveedor del servicio
})
export class FibonacciComponent {
  numero: number = 0;
  resultado?: any;

  constructor(private ejerciciosService: EjerciciosService) { }

  validarNumero() {
    this.ejerciciosService.ValidarFibonacci(this.numero).subscribe(res => {
      if (res.esFibonacci === true) {
        this.resultado = 'El número ingresado si pertenece a la serie de fibonacci '
      } else {
        this.resultado = 'El número ingresado no pertenece a la serie de fibonacci '
      }
    });
  }
}
