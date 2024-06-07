import { Component } from '@angular/core';
import { EjerciciosService } from '../../Services/ejercicios.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-fibonacci',
  standalone: true,
  imports: [    
    FormsModule ],
  templateUrl: './fibonacci.component.html',
  styleUrl: './fibonacci.component.css'
})
export class FibonacciComponent {
  numero: any;
  resultado?: number;

  constructor(private ejerciciosService: EjerciciosService) { }

  calcularFibonacci() {
    this.ejerciciosService.ValidarFibonacci(this.numero).subscribe(res => {
      this.resultado = res;
    });
  }
}
