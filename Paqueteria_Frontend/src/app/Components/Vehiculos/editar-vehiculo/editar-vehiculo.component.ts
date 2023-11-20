import { Component } from '@angular/core';
import {Sucursal} from "../../../entidades/sucursal";
import {SucursalService} from "../../../Servicios/sucursal.service";
import {Vehiculo} from "../../../entidades/vehiculo";
import {VehiculoServicioService} from "../../../Servicios/vehiculo-servicio.service";

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent {
  vehiculos:Vehiculo[];
  sucursales:Sucursal[];
  constructor(private sucursalService:SucursalService,private vehiculoService:VehiculoServicioService){
    //this.getSucursales();
    this.getSucursales();
    //this.getVehiculos();
  }

  updateVehiculo(id:number,idSucursal:number){

    const placa = document.getElementById("placa-"+id) as HTMLInputElement;
    const tipo = document.getElementById("tipo-"+id) as HTMLInputElement;
    const anio = document.getElementById("anio-"+id) as HTMLInputElement;
    const asientos = document.getElementById("asientos-"+id) as HTMLInputElement;
    const ton = document.getElementById("ton-"+id) as HTMLInputElement;
    const volumen = document.getElementById("volumen-"+id) as HTMLInputElement;
    //alert(enlace.value+" "+estado.value)
    let vehiculo:Vehiculo=new Vehiculo();

    vehiculo.id=id;
    vehiculo.placa=placa.value;
    vehiculo.tipo=tipo.value;
    vehiculo.anio=anio.value;
    vehiculo.noAsientos=asientos.value;
    vehiculo.capacidadTon=ton.value;
    vehiculo.capacidadVol=volumen.value;

    vehiculo.idSucursal=idSucursal;

    this.vehiculoService.editarVehiculo(vehiculo).subscribe(
      data=>{


      }, error=>{

      }
    )



  }
  private getValorBoolean(val:string){
    console.log(val);
    if(val+""==="true"){
      return true;
    }else{
      return false
    }

  }



  getSucursales(){
    this.sucursalService.getSucursales().subscribe(
      data=>{
        this.sucursales=data.content
        //console.log(JSON.stringify(data.content));


      }, error=>{
        alert("Error al obtener las sucursales")
      }
    )
  }
  buscarVehiculoEnSucursal(id:number){
    alert(id)
    this.getVehiculos(id);
  }


  getVehiculos(id:number){
    alert(id)
    this.vehiculoService.getVehiculosBySucursalId(id).subscribe(
      data=>{
        this.vehiculos=data;

      },
      error=>{
        alert("Error al obtener vehiculos")

      }
    )
  }
}
