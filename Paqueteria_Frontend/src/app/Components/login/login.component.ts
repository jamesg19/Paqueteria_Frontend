import { Component } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { Persona } from 'src/app/entidades/persona';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private personaServicio:PersonaService){

  }


  login(){
    const id = document.getElementById("id") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const login:Persona=new Persona();
    login.id=+id.value;
    login.password=password.value;
    this.personaServicio.login(login).subscribe(
      data=>{
        alert("Exito")
      },
      error=>{
        if(error.HttpStatusCode=409){
          alert("Credenciales incorrectas")
        }
      }
    )
  }

}
