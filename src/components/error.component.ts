import { Component } from "@angular/core";

@Component({
    selector: 'error',
    templateUrl: '../app/views/error.html'
})

export class ErrorComponent {
   public titulo:string;
   
   constructor(){
    this.titulo = 'Error!! Página no encontrada.'

   }
   
   ngOnInit(){
    console.log("Componente error.component.ts cargado");
   }
  
}

