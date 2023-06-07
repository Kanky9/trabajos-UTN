import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { InicioComponent } from './clientes/inicio/inicio.component';

const routes: Routes = [
  { path: 'app-inicio', component: InicioComponent },
  { path: 'app-alta-cliente', component: AltaClienteComponent},
  { path: 'app-listado-clientes', component: ListadoClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 