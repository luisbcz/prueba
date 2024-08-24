import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  filtroTipo: string = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }

  filtrarProductos(): any[] {
    return this.filtroTipo ? this.productos.filter(p => p.tipo === this.filtroTipo) : this.productos;
  }
}
export { ProductoService };

