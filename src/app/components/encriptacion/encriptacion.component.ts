import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EjerciciosService } from '../../Services/ejercicios.service'; // Aquí importas el servicio

@Component({
  selector: 'app-fibonacci',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encriptacion.component.html',
  styleUrls: ['./encriptacion.component.css'],
  providers: [EjerciciosService]
})
export class EncriptacionComponent {
  textoAEncriptar: string = '';
  textoEncriptado: string = '';
  resultadoBackend: string = '';
  resultadoEncriptado: string = '';
  resultadoDesencriptado: string = '';
  constructor(private ejerciciosService: EjerciciosService) { }

  encriptarTexto(): void {
    this.ejerciciosService.EncripartarPalabra(this.textoAEncriptar).subscribe((resultado) => {
      this.resultadoEncriptado = resultado;
      console.log(resultado)
    });
  }

  desencriptarTexto(): void {
    this.ejerciciosService.DesencripartarPalabra(this.textoEncriptado).subscribe((resultado) => {
      this.resultadoDesencriptado = resultado.Palabra;
    });
  }
}
