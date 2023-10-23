import {Component, Inject, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Envio} from "../../../entidades/envio";
import {PersonaService} from "../../../Servicios/persona.service";
import {SucursalService} from "../../../Servicios/sucursal.service";
import {Persona} from "../../../entidades/persona";
import {Sucursal} from "../../../entidades/sucursal";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  private personaServ = inject(PersonaService);
  private sucursalServ=inject(SucursalService);
  personaEmisor:Persona = new Persona();
  personaReceptor:Persona = new Persona();
  sucursalOrigen:Sucursal = new Sucursal();
  sucursalDestino:Sucursal = new Sucursal();
  constructor(@Inject(MAT_DIALOG_DATA) public data: {env: Envio}) {
    console.log(data.env)
    this.sucursalServ.getSucursalId(data.env.idSucursalOrigen).subscribe({
      next: data => this.sucursalOrigen = data
    });
    this.sucursalServ.getSucursalId(data.env.idSucursalDestino).subscribe({
      next: data => this.sucursalDestino = data
    });

    this.personaServ.getPersonaNit(data.env.nitEmisor).subscribe({
      next: data => this.personaEmisor = data
    });
    this.personaServ.getPersonaNit(data.env.nitReceptor).subscribe({
      next: data => this.personaReceptor = data
    });
    // this.getPersona(data.env.nitEmisor,this.personaEmisor);
    // this.getPersona(data.env.nitReceptor,this.personaReceptor);
    // this.getSucursal(data.env.idSucursalOrigen,this.sucursalOrigen);
    // this.getSucursal(data.env.idSucursalDestino,this.sucursalDestino);
  }

  private getPersona(nit, valor: Persona){
    this.personaServ.getPersonaNit(nit).subscribe({
      next: data=>{console.log(data);valor = data},
      error: err => console.log(err)
    });
  }

  private getSucursal(id,valor:Sucursal){
    let retorno;
    this.sucursalServ.getSucursalId(id).subscribe({
      next:data=>{console.log(data); valor = data;},
    });
  }
}
