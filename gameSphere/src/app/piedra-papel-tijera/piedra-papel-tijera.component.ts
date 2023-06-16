import { Component } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {

  /*jugadorEleccion: string;
  computadoraEleccion:string;
  resultado: string;
*/

  Eleccion=['piedra', 'papel','tijera'];

  /*elegir(elegir:string){
    this.jugadorEleccion = elegir;
    this.computadoraEleccion = this.elegir[Math.floor(Math.random() * this.elegir.length)];

    this.calcularResultado();
  }*/

}
