import { Departamento } from "./departamento";
import { Municipio } from "./municipio";

export class Sucursal {
    idSucursal:number = 0;
    departamento:Departamento = new Departamento();
    departamento_id:number = 0;
    municipio_id:number = 0;
    municipio:Municipio = new Municipio();
    direccion:string = '';
    nombre:string = '';
    esEnlace:boolean = false;
    estado:boolean = false;

}
