import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators} from '@angular/forms'
import { ProductoService } from '../../core/services/producto/producto.service';
import { Producto } from '../../model/producto.interface';

@Component({
  selector: 'app-producto-create',
  standalone: true, 
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './producto-create.component.html',
  styleUrl: './producto-create.component.css'
})
export default class ProductoCreateComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute); 
  private productService = inject(ProductoService)

  form?: FormGroup;
  product?: Producto;

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');    
    if(id){
      this.productService.get(parseInt(id))
      .subscribe(product => {
        this.product = product;
        this.form = this.fb.group({
          nombre: [product.nombre,[Validators.required]],
          descripcion: [product.descripcion,[Validators.required]],
          stock: [product.stock,[Validators.required]],
          tipo: [product.tipo,[Validators.required]],
        });
      })
    }else{
      this.form = this.fb.group({
        nombre: ['',[Validators.required]],
        descripcion: ['',[Validators.required]],
        stock: ['',[Validators.required]],
        tipo: ['',[Validators.required]],
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
    const product = this.form!.value;
    this.productService.create(product)
    .subscribe(()=>{
      this.router.navigate(['/productos'])
    });
  }

}
