import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../../model/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
    private http = inject(HttpClient);

    list(){
      return this.http.get<Categoria[]>('http://localhost:8081/api/v1/categories');
    }

    get(id:number){
      return this.http.get<Categoria>(`http://localhost:8081/api/v1/categories/${id}`);
    }

    create(category:any){
      return this.http.post<Categoria>('http://localhost:8081/api/v1/categories', category);
    }

    update(id:number, category:any){
      return this.http.put<Categoria>(`http://localhost:8081/api/v1/categorie/${id}`, category);
    }

    delete(id:number){
      return this.http.delete<void>(`http://localhost:8081/api/v1/Categorie/${id}`);
    }

  
}
