import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ProductoService } from '../../Services/producto.service';
import { ProductoDTO } from '../../Interfaces/producto';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatTableModule
  ]
})
export class CrudComponent implements OnInit {
  productos: ProductoDTO[] = [];
  producto: ProductoDTO = {
    Codigo: '',
    Descripcion: '',
    ListaDePrecios: [],
    Imagen: '',
    ProductoParaLaVenta: false,
    PorcentajeIva: 0
  };
  nuevoPrecio: number | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.GetListProductos().subscribe((data: ProductoDTO[]) => {
      this.productos = data;
      console.log(data,'respuesta')
    });
  } 

  guardarProducto(): void {
      // Si el producto no tiene un código, significa que estamos guardando un nuevo producto
      this.productoService.PostProducto(this.producto).subscribe((producto: ProductoDTO) => {
        // Manejar la respuesta, por ejemplo, agregar el producto a la lista
        this.productos.push(producto);
        // También podrías limpiar el formulario después de guardar el producto si lo deseas
        this.limpiarFormulario();
      });
  }
  
  limpiarFormulario(): void {
    // Reinicia los valores del formulario para agregar un nuevo producto
    this.producto = {
      Codigo: '',
      Descripcion: '',
      ListaDePrecios: [],
      Imagen: '',
      ProductoParaLaVenta: false,
      PorcentajeIva: 0
    };
    this.nuevoPrecio = null;
  }
  

  editarProducto(producto: ProductoDTO): void {
    this.producto = { ...producto };
  }

  eliminarProducto(codigo: string): void {
    this.productoService.DeleteProducto(codigo).subscribe(() => {
      this.obtenerProductos();
    });
  }

  agregarPrecio(): void {
    if (this.nuevoPrecio !== null) {
      this.producto.ListaDePrecios.push(this.nuevoPrecio);
      this.nuevoPrecio = null;
    }
  }

  eliminarPrecio(index: number): void {
    this.producto.ListaDePrecios.splice(index, 1);
  }

  resetForm(): void {
    this.producto = {
      Codigo: '',
      Descripcion: '',
      ListaDePrecios: [],
      Imagen: '',
      ProductoParaLaVenta: false,
      PorcentajeIva: 0
    };
  }
}
