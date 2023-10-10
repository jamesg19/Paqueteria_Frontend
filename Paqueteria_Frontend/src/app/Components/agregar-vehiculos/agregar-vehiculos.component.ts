import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-vehiculos',
  templateUrl: './agregar-vehiculos.component.html',
  styleUrls: ['./agregar-vehiculos.component.css']
})
export class AgregarVehiculosComponent {
  vehiculosForm: FormGroup;
  flag:number=0;
  
  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  private createForm(){
    console.log("crear el form")
    this.vehiculosForm = this.formBuilder.group({
        vehiculo: this.formBuilder.group({
          

            sucursal_id:  new FormControl([0], [Validators.required, Validators.minLength(1)]),   
            nombre:  new FormControl('', [Validators.required, Validators.minLength(1)]),            
            placas:  new FormControl('', [Validators.required, Validators.minLength(1)]),                  
            tipo:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            tonelaje: new FormControl('', [Validators.required, Validators.minLength(1)]),
            color: new FormControl('', [Validators.required, Validators.minLength(1)]),
                             

      })
    });

    
  }
  onSubmit(){
    if(this.vehiculosForm.invalid){
      this.vehiculosForm.markAllAsTouched
      this.flag=1;//error msg
    }

    this.flag=2;//ningun error al enviar 200 Status
  }

}
