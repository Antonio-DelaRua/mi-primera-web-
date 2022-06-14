import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//componentes
import { HomeComponent } from "src/components/home.component";
import { ErrorComponent } from 'src/components/error.component';
import { ProductosList } from 'src/components/productos-list.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'productos', component: ProductosList},
  {path:'**', component: ErrorComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
