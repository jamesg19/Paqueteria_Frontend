import {Component, inject} from '@angular/core';
import {Persona} from "../../../entidades/persona";
import {PersonaService} from "../../../Servicios/persona.service";

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
    personas :Persona[];
    personaServ:PersonaService = inject(PersonaService);
    detalle :string[];
    constructor() {
      this.personaServ.getPersonas().subscribe({
        next:data=> {
          this.personas = data;
          this.detalle = new Array(data.length).fill("");
        },
        error: err => console.log(err)
      });
    }

    editarPersona(persona,id){
      this.personaServ.editar(persona).subscribe({
        next:data=> {
          console.log("Persona editada!");
          this.detalle[id] = "Persona Editada!";
        },
        error:err=>console.log(err.error)
      });
    }
}
