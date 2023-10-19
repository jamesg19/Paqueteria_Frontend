import { Sucursal } from "./sucursal";
import { Usuario } from "./usuario";
export class Ruta {
    id:number;
    origen:Sucursal;
    destino:Sucursal;
    usuarioEmisor:Usuario;
    usuarioReceptor:Usuario;
    distancia:number;
    dias:number;
    costo:number;

}
