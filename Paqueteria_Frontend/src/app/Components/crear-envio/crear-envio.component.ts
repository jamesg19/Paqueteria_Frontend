import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioModalComponent } from '../../UsuarioModal/usuarioModal.component';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from 'src/app/Servicios/persona.service';
import {Persona} from "../../entidades/persona";


@Component({
  selector: 'app-crear-envio',
  templateUrl: './crear-envio.component.html',
  styleUrls: ['./crear-envio.component.css'],
})
export class CrearEnvioComponent {
  createShipForm: FormGroup;
  isDarkMode:boolean=true;
  nombre_emisor;
  nombre_receptor;
  flag: boolean = false;
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog,private personaServicio:PersonaService){
    this.createForm();

  }
  public openModal(){
    const dialogRef = this.dialog.open(UsuarioModalComponent,{
      width:"600px"
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("Cerro dialogo");
    });
    (this.personaServicio.getPersonaNit("1000501").subscribe(data=>{
      console.log(data);
    }));
  }

  async buscarPersonaNit(nit):Promise<Persona>{
      console.log("holi");
    try{
        return await this.personaServicio.getPersonaNit(nit).toPromise();
    }catch (error) {
        console.log(error);
    }
    return null;
  }
buscarPersonaEmisor(){
    let nit = this.createShipForm.get('ships.nit_emisor').value;
     this.buscarPersonaNit(nit).then(per=>{
         if(per==null)this.dialog.open(UsuarioModalComponent,{width:"400px"});
         this.nombre_emisor = per.nombre;
     });
}
  buscarPersonaReceptor(){
    let nit = this.createShipForm.get('ships.nit_receptor').value;
      this.buscarPersonaNit(nit).then(per=>{
          if(per==null)this.dialog.open(UsuarioModalComponent,{width:"400px"});
          this.nombre_receptor = per.nombre;
      });
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
            tarifa_id:  [1],
            nit_receptor: new FormControl("", [Validators.required, Validators.minLength(1)]),
            nit_emisor: new FormControl("", [Validators.required, Validators.minLength(1)])





      })
    });


  }

onSubmit(){

}


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  getNitReceptor() {
    return this.createShipForm.get('ships.nit_receptor').value;
  }
}
