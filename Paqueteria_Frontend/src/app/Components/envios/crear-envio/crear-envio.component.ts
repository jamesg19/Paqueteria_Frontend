import {Component, inject} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioModalComponent } from '../../../UsuarioModal/usuarioModal.component';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from 'src/app/Servicios/persona.service';
import {Persona} from "../../../entidades/persona";
import {SucursalService} from "../../../Servicios/sucursal.service";
import {Sucursal} from "../../../entidades/sucursal";
import {Envio} from "../../../entidades/envio";
import {EnviosService} from "../../../Servicios/envios.service";


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
  sucursalServ = inject(SucursalService);
  envioServ: EnviosService = inject(EnviosService);
  sucursales:Sucursal[];
  resultado:String = "";
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog,private personaServicio:PersonaService){
    this.createForm();
    this.getSucursales();
  }
buscarPersonaEmisor(){
    let nit = this.createShipForm.get('ships.nit_emisor').value;
     this.personaServicio.getPersonaNit(nit).subscribe({
       next: data => this.nombre_emisor = data.nombre,
       error: err => this.dialog.open(UsuarioModalComponent, {width: "400px"})
     });
}
  buscarPersonaReceptor(){
    let nit = this.createShipForm.get('ships.nit_receptor').value;
      this.personaServicio.getPersonaNit(nit).subscribe({
        next: data => this.nombre_receptor = data.nombre,
        error: err => {this.dialog.open(UsuarioModalComponent, {width: "400px"})}
      });
  }

  getSucursales(){
    this.sucursalServ.getSucursalesActivas().subscribe({
      next: data => {
        this.sucursales = data;
      },
      error: err => {
      }
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
  let envio:Envio = new Envio();
  envio.idSucursalOrigen = this.createShipForm.get("ships.sucursal_origen_id").value;
  envio.idSucursalDestino = this.createShipForm.get("ships.sucursal_destino_id").value;
  envio.nitEmisor = this.createShipForm.get("ships.nit_emisor").value;
  envio.nitReceptor = this.createShipForm.get("ships.nit_receptor").value;
  envio.fechaLlegada = this.createShipForm.get("ships.fecha_envio").value;
  envio.subTotal = this.createShipForm.get("ships.tarifa_id").value;

  this.envioServ.save(envio).subscribe({
    next: data =>{
      this.resultado = "Envio Exitoso";
    },
    error: err =>{
      console.log(err);
      this.resultado = err.value;
    }
  });
}


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  getNitReceptor() {
    return this.createShipForm.get('ships.nit_receptor').value;
  }
}
