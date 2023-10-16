import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from 'src/app/Servicios/sucursal.service';

@Component({
  selector: 'app-agregar-ruta',
  templateUrl: './agregar-ruta.component.html',
  styleUrls: ['./agregar-ruta.component.css']
})
export class AgregarRutaComponent {
  rutasForm: FormGroup;
  
  
  constructor(private formBuilder: FormBuilder, 
    private sucursalService:SucursalService){
    this.createForm();

  }
  private createForm(){

    console.log("crear el form");
    
    this.rutasForm = this.formBuilder.group({
      ruta: this.formBuilder.group({

            sucursalOrigen:  new FormControl('', [Validators.required, Validators.minLength(1)]),            
            sucursalDestino:  new FormControl('', [Validators.required, Validators.minLength(1)]),       
            distancia:  new FormControl('', [Validators.required, Validators.minLength(1)]),  
            dias:  new FormControl('', [Validators.required, Validators.minLength(1)]),
            costo:  new FormControl('', [Validators.required, Validators.minLength(1)]),
              
            
                             

      })
    });

    
  }

}
