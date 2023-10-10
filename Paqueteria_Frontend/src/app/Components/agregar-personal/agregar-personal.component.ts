import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-personal',
  templateUrl: './agregar-personal.component.html',
  styleUrls: ['./agregar-personal.component.css']
})
export class AgregarPersonalComponent {
  personalForm: FormGroup;
  flag:number=0;
  
  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  private createForm(){
    console.log("crear el form")
    this.personalForm = this.formBuilder.group({
      personal: this.formBuilder.group({
          

            sucursal_id:  new FormControl([0], [Validators.required, Validators.minLength(1)]),   
            nombre:  new FormControl('', [Validators.required, Validators.minLength(1)]),            
            apellido:  new FormControl('', [Validators.required, Validators.minLength(1)]),                  
            rol:  new FormControl('', [Validators.required, Validators.minLength(1)])
                             

      })
    });

    
  }

  onSubmit(){
    if(this.personalForm.invalid){
      this.personalForm.markAllAsTouched
      this.flag=1;//error msg
    }

    this.flag=2;//ningun error al enviar 200 Status
  }
}
