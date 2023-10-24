import {Component, inject} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Persona} from "../entidades/persona";
import {PersonaService} from "../Servicios/persona.service";
import {constructorParametersDownlevelTransform} from "@angular/compiler-cli";
import {HttpStatusCode} from "@angular/common/http";
@Component({
  selector: 'app-UsuarioModal',
  templateUrl: './usuarioModal.component.html',
  styleUrls: ['./usuarioModal.component.css']
})
export class UsuarioModalComponent {
  private personaServicio = inject(PersonaService);

  crearPersonaForm: FormGroup;
  resultado:String;
  constructor(private formBuilder:FormBuilder){
    this.crearForm();
}

  private crearForm(){
    this.crearPersonaForm = this.formBuilder.group({
      persona : this.formBuilder.group({

        nit : new FormControl(1000,[Validators.required,Validators.minLength(1)]),
        nombre : new FormControl('',[Validators.required,Validators.minLength(1)]),
        edad : new FormControl(0,[Validators.required,Validators.minLength(1)]),
        direccion : new FormControl("",[Validators.required,Validators.minLength(1)]),
        celular : new FormControl("")

      })
    });
  }

  onSubmit(){
    let persona:Persona = new Persona();
    persona.nit = this.getNit();
    persona.nombre = this.getNombre();
    persona.edad = this.getEdad();
    persona.celular = this.getNumero();
    persona.domicilio = this.getDirecicon();
      this.personaServicio.save(persona).subscribe({
        next: data => {this.resultado = `Usuario ${data.nombre} creado!`;},
        error: err => {
          console.log(err.error);
          this.resultado = err.error.detail;
        }
      });
  }



  getNit(){
    return this.crearPersonaForm.get('persona.nit').value;
  }
  getNombre(){
    return this.crearPersonaForm.get('persona.nombre').value;
  }
  getEdad(){
    return this.crearPersonaForm.get('persona.edad').value;
  }
  getDirecicon(){
    return this.crearPersonaForm.get('persona.direccion').value;
  }
  getNumero(){
    return this.crearPersonaForm.get('persona.celular').value;
  }
}

