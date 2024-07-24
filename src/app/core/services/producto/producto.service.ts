import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../../model/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    private http = inject(HttpClient);

    list(){
      return this.http.get<Producto[]>('http://localhost:8081/api/v1/products');
    }

    get(id:number){
      return this.http.get<Producto>(`http://localhost:8081/api/v1/products/${id}`);
    }

    create(product:any){
      return this.http.post<Producto>('http://localhost:8081/api/v1/products', product);
    }

    update(id:number, product:any){
      return this.http.put<Producto>(`http://localhost:8081/api/v1/products/${id}`, product);
    }

    delete(id:number){
      return this.http.delete<void>(`http://localhost:8081/api/v1/products/${id}`);
    }

  
}
