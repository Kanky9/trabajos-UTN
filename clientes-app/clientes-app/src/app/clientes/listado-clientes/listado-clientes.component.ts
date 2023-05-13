import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {  
  
  eliminarItem(){
    throw new Error('Method not implemented'); //agregamos la funcion, no sabemos para que es lo de abajo
  }
  
  clientes!: Cliente[];
  grupos: Grupo[] = [];

  constructor(private clientesService: ClientesService) { } //Esto es una inyeccion de dependencias

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }

}