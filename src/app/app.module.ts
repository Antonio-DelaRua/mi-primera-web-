import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';






//rutas

import { routing, appRoutingProviders } from './app-routing';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home.component';
import { ErrorComponent } from 'src/components/error.component';
import { ProductosList } from 'src/components/productos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
    
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
