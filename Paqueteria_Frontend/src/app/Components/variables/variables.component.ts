import {Component, inject} from '@angular/core';
import {VariablesService} from "../../Servicios/variables.service";
import {Variables} from "../../entidades/variables";

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  variableServicio = inject(VariablesService);
  variables:Variables[];
  constructor() {
    this.variableServicio.getAll().subscribe({
      next:data=>this.variables = data,
      error:err=>console.log("Error en recuperar variables")
    });
  }

}
