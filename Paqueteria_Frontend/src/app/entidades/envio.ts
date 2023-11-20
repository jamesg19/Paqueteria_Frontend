import {Sucursal} from "./sucursal";
import {Persona} from "./persona";
import {Data} from "@angular/router";

export class Envio {
  id:number;
  idSucursalOrigen:number;
  sucursalOrigen:Sucursal;
  idSucursalDestino:number;
  sucursalDestino:Sucursal;
  nitEmisor:number;
  personEmisor:Persona;
  nitReceptor:number;
  personaReceptor:Persona;
  fechaLlegada:Date;
  subTotal:number;
  peso:number;
  volumen:number;
  diasTranscurridos:number
  estado:string;
  fecha:Date;
  
}
