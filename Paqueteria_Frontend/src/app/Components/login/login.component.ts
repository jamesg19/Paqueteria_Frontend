import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { Persona } from 'src/app/entidades/persona';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private personaServicio:PersonaService, private router:Router){

  }


  login(){
    const id = document.getElementById("id") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const login:Persona=new Persona();
    login.id=+id.value;
    login.password=password.value;
    this.personaServicio.login(login).subscribe(
      data=>{
        localStorage.setItem("ROL_PAQUETERIA",data.rol);
        localStorage.setItem("NOMBRE_PAQUETERIA",data.nombre);
        localStorage.setItem("ID_PAQUETERIA",data.id+"");
        alert("Login exitoso"),
        this.router.navigate(['/']);
      },
      error=>{
        if(error.HttpStatusCode=409){
          alert("Credenciales incorrectas")
        }
      }
    )
  }

  logout(){
    
    localStorage.removeItem("ROL_PAQUETERIA");
    localStorage.removeItem("NOMBRE_PAQUETERIA");
    localStorage.removeItem("ID_PAQUETERIA");
    this.router.navigate(['/']);     
    
  }

}
