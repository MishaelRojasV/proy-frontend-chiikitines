import { Categoria } from './../../model/categoria.interface';

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators} from '@angular/forms'
import { CategoriaService } from '../../core/services/categoria/categoria.service';
import { Categoria } from '../../model/categoria.interface';


@Component({
  selector: 'app-categoria-create',
  standalone: true,
  imports: [],
  templateUrl: './categoria-create.component.html',
  styleUrl: './categoria-create.component.css'
})

export default class CategoriaCreateComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute); 
  private productService = inject(CategoriaService)

  form?: FormGroup;
  product?: Categoria;

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');    
    if(id){
      this.CategoriaService.get(parseInt(id))
      .subscribe(category => {
        this.product = category;
        this.form = this.fb.group({
          descripcion: [category.descripcion,[Validators.required]],
        });
      })
    }else{
      this.form = this.fb.group({
        descripcion: ['',[Validators.required]],
        
      });
    }
  
  }

  /*   form = this.fb.group({
    nombre: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    stock: ['',[Validators.required]],
    tipo: ['',[Validators.required]],
  }); */

  create(){
    const category = this.form!.value;
    this.productService.create(category)
    .subscribe(()=>{
      this.router.navigate(['/categorias'])
    });
  }

}
