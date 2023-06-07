import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {  
  clientes!: Cliente[];
  grupos: Grupo[] = [];
  buscador: String = "";

  eliminarItem(cliente : Cliente) {/**
   * 
   */
    const borrar = this.clientes.indexOf(cliente); 
    if (borrar !== -1) {
      this.clientes.splice(borrar, 1);
    }

    /*throw new Error('Method not implemented'); //agregamos la funcion, no sabemos para que es lo de abajo*/
  } 

  buscarItems() {
    this.clientes.forEach(element => {
      
     //terminar con los pibes
     //buscar un string que tenga un substring 
      
      })
    }

  
  constructor(private clientesService: ClientesService) {

    /* agregar un cliente para que ya quede definido
      this.clientesService.agregarCliente({
      id: 1,
      nombre: 'francesco gaido',
      dni: '51701898',
      direccion: 'hipo yri 2032',
      grupo: 1,
      genero:'masculino'

    })*/
  
      
   }
  /*Esto es una inyeccion de dependencias*/
  
  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }
}