import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.css']
})
export class AgregarSucursalComponent {
  sucursalForm: FormGroup;
  flag:number=0;
  
  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  private createForm(){
    console.log("crear el form")
    this.sucursalForm = this.formBuilder.group({
      sucursal: this.formBuilder.group({

            nombre:  new FormControl('', [Validators.required, Validators.minLength(1)]),            
            direccion:  new FormControl('', [Validators.required, Validators.minLength(1)]),       
            municipio:  new FormControl('', [Validators.required, Validators.minLength(1)]),  
            departamento_id:  new FormControl('', [Validators.required, Validators.minLength(1)]),                     
            
                             

      })
    });

    
  }

  onSubmit(){
    if(this.sucursalForm.invalid){
      this.sucursalForm.markAllAsTouched
      this.flag=1;//error msg
    }

    this.flag=2;//ningun error al enviar 200 Status
  }
}
