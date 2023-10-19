import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Persona} from "../entidades/persona";
import {PersonaService} from "../Servicios/persona.service";
import {constructorParametersDownlevelTransform} from "@angular/compiler-cli";
@Component({
  selector: 'app-UsuarioModal',
  templateUrl: './usuarioModal.component.html',
  styleUrls: ['./usuarioModal.component.css']
})
export class UsuarioModalComponent {
  crearPersonaForm: FormGroup;
  constructor(public dialog:MatDialog,private formBuilder:FormBuilder,private personaServicio:PersonaService){
    this.crearForm();
}

  private crearForm(){
    this.crearPersonaForm = this.formBuilder.group({
      persona : this.formBuilder.group({

        nit : new FormControl(1000,[Validators.required,Validators.minLength(1)]),
        nombre : new FormControl('Persona ',[Validators.required,Validators.minLength(1)]),
        edad : new FormControl(32,[Validators.required,Validators.minLength(1)]),
        direccion : new FormControl('Direccion Persona ',[Validators.required,Validators.minLength(1)]),
        celular : new FormControl("")

      })
    });
  }

  onSubmit(){
    if(this.crearPersonaForm.invalid){
        this.crearPersonaForm.markAllAsTouched();
    }
    let persona:Persona = new Persona();
    persona.nit = this.getNit();
    persona.nombre = this.getNombre();
    persona.edad = this.getEdad();
    persona.celular = this.getNumero();
    persona.domicilio = this.getDirecicon();
    persona.idPersona = 1;
    this.personaServicio.save(persona);
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
    return this.crearPersonaForm.get('persona.numero').value;
  }
}

