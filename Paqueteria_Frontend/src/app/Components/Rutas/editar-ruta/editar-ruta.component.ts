import { Component } from '@angular/core';
import { RutaService } from 'src/app/Servicios/ruta.service';
import { SucursalService } from 'src/app/Servicios/sucursal.service';
import { Ruta } from 'src/app/entidades/ruta';

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css']
})
export class EditarRutaComponent {

  rutas:Ruta[];

  constructor(private rutaService:RutaService){
    this.obtenerRutas();
  }

  obtenerRutas(){

    this.rutaService.obtenerRutas().subscribe(
      data=>{
        this.rutas=data;

      }, error=>{
        alert(" No se puedo obtener las rutas");
      }
    )

  }




}
