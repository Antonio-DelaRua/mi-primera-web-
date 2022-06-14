import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'productos-list',
    templateUrl: '../app/views/productos-list.html'
})

export class ProductosList{
     public titulo: string;


     constructor(
        private route: ActivatedRoute,
        private  _route: Router
     ){
        this.titulo = 'Listado de productos';
     }

     ngOnInit(){

        console.log('productos-list.component.ts cargado');
     }

}