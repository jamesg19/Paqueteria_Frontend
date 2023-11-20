import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode=false;
  isAdmin=false;
  isUser=false;
  isLogOut=false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    
  }
  constructor(private router:Router){
    this.getRole();
  }


  getRole(){
    const ROL=localStorage.getItem("ROL_PAQUETERIA");
    localStorage.getItem("NOMBRE_PAQUETERIA");
    localStorage.getItem("ID_PAQUETERIA");


    if(ROL=="ADMIN"){
      this.isAdmin=true;
      this.isUser=false;
      this.isLogOut=false;
      
    }else if(ROL=="USER"){
      this.isAdmin=false;
      this.isUser=true;
      this.isLogOut=false;

    }else{
      this.isAdmin=false;
      this.isUser=false;
      this.isLogOut=true;


    }
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.removeItem("ROL_PAQUETERIA");
    localStorage.removeItem("NOMBRE_PAQUETERIA");
    localStorage.removeItem("ID_PAQUETERIA");
      
    
  }

}
