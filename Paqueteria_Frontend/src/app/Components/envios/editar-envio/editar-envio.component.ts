import {Component, inject} from '@angular/core';
import {EnviosService} from "../../../Servicios/envios.service";
import {Envio} from "../../../entidades/envio";
import {PersonaService} from "../../../Servicios/persona.service";
import {Persona} from "../../../entidades/persona";
import {MatDialog} from "@angular/material/dialog";
import {DetalleComponent} from "../detalle/detalle.component";


@Component({
  selector: 'app-editar-envio',
  templateUrl: './editar-envio.component.html',
  styleUrls: ['./editar-envio.component.css']
})
export class EditarEnvioComponent {
  enviosService = inject(EnviosService);
  personaService = inject(PersonaService);
  envios:Envio [];
  constructor(private dialog:MatDialog) {
    this.enviosService.getEnvios().subscribe({
      next:data=>this.envios = data,
      error:err=>alert("Error al recuperar envios")
  })}

  abrirDialogo(envio:Envio){
    console.log(envio)
    this.dialog.open(DetalleComponent,{ data: { env: envio }, width: "600px" });
  }
  datosPersonaNit(nit){
    let retorno="";
    let peronsa:Persona;
    this.personaService.getPersonaNit(nit).subscribe({
      next:data=>peronsa = data,
      error:err=>{
        console.log("Error en buscar persona en lista y editar envio");
      }
    });
    retorno+=`Nombre: ${peronsa.nombre}\n Celular: ${peronsa.celular}\n Direccion: ${peronsa.domicilio}`;
    return retorno;
  }

}
