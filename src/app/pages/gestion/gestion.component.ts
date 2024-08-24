import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productos/productos.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  productos: any[] = [];
  searchId: number = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }

  buscarProducto(): any[] {
    return this.searchId ? this.productos.filter(p => p.id == this.searchId) : this.productos;
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  editarProducto(id: number): void {
    
    alert('Editar producto con ID: ' + id);
  }
}
