import { Component } from '@angular/core';
import { SucursalService } from 'src/app/Servicios/sucursal.service';
import { Sucursal } from 'src/app/entidades/sucursal';

@Component({
  selector: 'app-edit-scucursal',
  templateUrl: './edit-scucursal.component.html',
  styleUrls: ['./edit-scucursal.component.css']
})
export class EditScucursalComponent {

  sucursales:Sucursal[];

  constructor(private sucursalService:SucursalService){
    this.getSucursales();
  }

  updateSucursal(id:number){
   
    const estado = document.getElementById("estado-"+id) as HTMLInputElement;
    const enlace = document.getElementById("enlace-"+id) as HTMLInputElement;
    alert(enlace.value+" "+estado.value)
    let sucursal:Sucursal=new Sucursal();

    sucursal.idSucursal=id;

    if(sucursal.estado+""==="true"){
    
    }

    

  }
  private getValorBoolean(val:string){

    
  }



  getSucursales(){
    this.sucursalService.getSucursales().subscribe(
        data=>{
          this.sucursales=data.content
          console.log(JSON.stringify(data.content));


        }, error=>{
          alert("Error al obtener las sucursales")
        }
    )
  }


}
