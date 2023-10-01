import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-envio',
  templateUrl: './crear-envio.component.html',
  styleUrls: ['./crear-envio.component.css']
})
export class CrearEnvioComponent {
  createShipForm: FormGroup;

  flag: boolean = false;
  
  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  private createForm(){
    console.log("crear el form")
    this.createShipForm = this.formBuilder.group({
        ships: this.formBuilder.group({
          

            sucursal_origen_id:  new FormControl([0], [Validators.required, Validators.minLength(1)]),
            sucursal_destino_id:  new FormControl([0], [Validators.required, Validators.minLength(1)]),
                                  
            cantidad_paquetes:  [1],
            peso:  [1],
            fecha_envio:  [2023],
            tarifa_id:  [1]                   





      })
    });

    
  }

onSubmit(){

}

}
