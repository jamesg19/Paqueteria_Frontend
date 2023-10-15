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

}
