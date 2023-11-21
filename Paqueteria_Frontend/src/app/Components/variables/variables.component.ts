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
    this.getValores()
  }
  getValores(){
    this.variableServicio.getAll().subscribe({
      next:data=>this.variables = data,
      error:err=>console.log("Error en recuperar variables")
    });
  }
  guardar(value:number,desc:string){

    const valor = document.getElementById(value+"") as HTMLInputElement;
    
    let variable:Variables=new Variables();
    variable.id=value;
    variable.descripcion=desc;
    variable.valor=+valor.value;

    this.variableServicio.save(variable,value).subscribe(
      data=>{
        this.getValores();
      }, error=>{

      }
    )

  }

}
