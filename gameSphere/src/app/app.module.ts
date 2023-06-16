import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoDeDadosComponent } from './juego-de-dados/juego-de-dados.component';
import { DadosComponent } from './juego-de-dados/dados/dados.component';
import { InicioComponent } from './inicio/inicio.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { JuegoComponent } from './piedra-papel-tijera/juego/juego.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoDeDadosComponent,
    DadosComponent,
    InicioComponent,
    PiedraPapelTijeraComponent,
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
