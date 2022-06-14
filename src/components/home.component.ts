import { Component } from "@angular/core";

@Component({

    selector:'home',
    templateUrl: '../app/views/home.html'
})

export class HomeComponent{
    public titulo:string;

    constructor(){
        this.titulo = 'webapp productos con Angular4';
    }

    ngOnInit(){
        console.log('se ha cargado el componente home.component.ts')
    }
}