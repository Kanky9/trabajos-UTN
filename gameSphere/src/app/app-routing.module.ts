import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JuegoDeDadosComponent } from './juego-de-dados/juego-de-dados.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [ 
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
  path: 'juegoDeDados', //Sirve para colocarle el nombre en el browser cada vez que cambiemos de vista (vista me refiero cuando apretamos el click y nos aparece otra cosa en la pagina).
  component: JuegoDeDadosComponent //Sirve para enlazar el componente que contiene las propiedades y funciones cuando presionemos la vista nueva
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }