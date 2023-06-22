import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JuegoDeDadosComponent } from './juego-de-dados/juego-de-dados.component';
import { InicioComponent } from './inicio/inicio.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },

  {
  path: 'juegoDeDados', //Sirve para colocarle el nombre en el browser cada vez que cambiemos de vista (vista me refiero cuando apretamos el click y nos aparece otra cosa en la pagina).
  component: JuegoDeDadosComponent //Sirve para enlazar el componente que contiene las propiedades y funciones cuando presionemos la vista nueva
  },

  {
    path: 'piedrapapeltijera',
    component: PiedraPapelTijeraComponent
  },

  {
    path: 'snakegame',
    component: SnakeGameComponent
  },


  {
    path: '**', // si no da bola va a la principal osea el inicio
    component: InicioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
