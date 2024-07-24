import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {        
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children:[
            {
                path: 'productos', 
                loadComponent: () => import('./productos/producto-list/producto-list.component'),                                                          
            },
            {
                path: 'crear-producto', 
                loadComponent: () => import('./productos/producto-create/producto-create.component'),                                     
            }, 
            {
                path: 'editar-producto/:id', 
                loadComponent: () => import('./productos/producto-create/producto-create.component'),                                     
            },         
            
        ]
    
                

    },
    {
        path: '**',
        redirectTo: ''
    } 


    /* {        
        path: 'productos',
        loadComponent: () => import('./productos/producto-list/producto-list.component'),
        children:[
            {path: 'create', loadComponent: () => import('./productos/producto-create/producto-create.component') }
    
        ]
    
    }, */

];    


/*     @NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    })
    export class PagesRoutingModule{} */

