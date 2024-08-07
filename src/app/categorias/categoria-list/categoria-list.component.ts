
import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../core/services/categoria/categoria.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Categoria } from '../../model/categoria.interface';

@Component({
  selector: 'app-categoria-list',
  standalone: true,
  imports: [],
  templateUrl: './categoria-list.component.html',
  styleUrl: './categoria-list.component.css'
})

export default class CategoriaListComponent implements OnInit{
  
  private categoriaService = inject(CategoriaService);
  products: Categoria[] = [];

  ngOnInit(): void {
    this.categoriaService.list()
    .subscribe(categories => {
      /* console.log(products); */
      this.products = categories ;
    });
  }

}
