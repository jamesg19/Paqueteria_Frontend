import { Departamento } from "./departamento";
import { Municipio } from "./municipio";

export class Sucursal {
    idSucursal:number;
    departamento:Departamento;
    departamento_id:number;
    municipio_id:number;
    municipio:Municipio;
    direccion:string;
    nombre:string;
    esEnlace:boolean;
    estado:boolean;
    longitud:number;
    latitud:number;

}

export class SucursalesDepto {
    idDepartamento: number;
    idDepartamento1: string;
    cantidadSucursales: number;
  }
