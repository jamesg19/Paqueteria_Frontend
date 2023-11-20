import {Sucursal} from "./sucursal";
import {Persona} from "./persona";
import { DatePipe } from '@angular/common'

export class Envio {
  id:number;
  idSucursalOrigen:number;
  sucursalOrigen:Sucursal;
  idSucursalDestino:number;
  sucursalDestino:Sucursal;
  nitEmisor:number;
  personaEmisor:Persona;
  nitReceptor:number;
  personaReceptor:Persona;
  fechaLlegada:string;
  subTotal:number;
  peso:number;
  volumen:number;
  diasTranscurridos:number
  estado:string;
  fecha:string;

}
