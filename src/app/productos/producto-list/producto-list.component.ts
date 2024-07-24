import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../core/services/producto/producto.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Producto } from '../../model/producto.interface';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [RouterModule,RouterLink, RouterOutlet],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css',
})

export default class ProductoListComponent implements OnInit{
  
  private productoService = inject(ProductoService);
  products: Producto[] = [];

  ngOnInit(): void {
    this.productoService.list()
    .subscribe(products => {
      /* console.log(products); */
      this.products = products ;
    });
  }

}


