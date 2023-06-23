//Importamos las clases, es el modulo raiz de los demas componentes

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoDeDadosComponent } from './juego-de-dados/juego-de-dados.component';
import { DadosComponent } from './juego-de-dados/dados/dados.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    JuegoDeDadosComponent,
    DadosComponent,
    PiedraPapelTijeraComponent,
    SnakeGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
