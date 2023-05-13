export interface Cliente {
  
    id: number;
    nombre: string;
    dni: string;
    direccion: string;
    grupo: number;
    genero: string; //agregamos genero de tipo string
  }
  
  export interface Grupo {
    id: number;
    nombre: string; 
  }