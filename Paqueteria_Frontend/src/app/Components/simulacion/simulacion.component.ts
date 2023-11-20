import { Component } from '@angular/core';
import { SimulacionService } from 'src/app/Servicios/simulacion.service';
import { Envio } from 'src/app/entidades/envio';
import { EnvioAtrasado } from 'src/app/entidades/envio-atrasado';
import { HistorialVehiculo } from 'src/app/entidades/historial-vehiculo';
import { HistoricoSucursal } from 'src/app/entidades/historico-sucursal';
import { Simulacion } from 'src/app/entidades/simulacion';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent {

  simularList:Simulacion;
    envios:Envio[];
    historicoSucursal:HistoricoSucursal[];
    historicoVehiculo:HistorialVehiculo[];
    envioAtrasado:EnvioAtrasado[];


  constructor(private simularService:SimulacionService){

  }


  simular(){
    this.simularService.simular().subscribe(
      data=>{
        this.simularList=data;
        this.envios=this.simularList.envios
        this.historicoSucursal=this.simularList.historicoSucursal
        this.historicoVehiculo=this.simularList.historicoVehiculo
        this.envioAtrasado=this.simularList.envioAtrasado

      }, error=>{

      }
    )
  }

}
