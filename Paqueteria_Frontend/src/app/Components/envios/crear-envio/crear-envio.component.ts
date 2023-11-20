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
import { sucursalValidator, usuarioValidator} from "../../../Validador/validador";
import {RutaService} from "../../../Servicios/ruta.service";


@Component({
  selector: 'app-crear-envio',
  templateUrl: './crear-envio.component.html',
  styleUrls: ['./crear-envio.component.css'],
})
export class CrearEnvioComponent {
  formPersonas:FormGroup;
  createShipForm: FormGroup;
  isDarkMode:boolean=true;
  nombre_emisor;
  nombre_receptor;
  sucursalServ = inject(SucursalService);
  envioServ: EnviosService = inject(EnviosService);
  rutaServicio:RutaService = inject(RutaService);
  sucursales:Sucursal[];
  resultado:String = "";
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog,private personaServicio:PersonaService){
    this.getSucursales();
    this.createForm();
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
    this.createShipForm = new FormGroup({
        ships: this.formBuilder.group({
            sucursal_origen_id:  new FormControl("", Validators.required),
            sucursal_destino_id:  new FormControl("", Validators.required),
            cantidad_paquetes:  [1],
            peso:  [1],
            fecha_envio:  [2023],
            tarifa_id:  [1],
            nit_receptor: new FormControl("", Validators.required),
            nit_emisor: new FormControl("", Validators.required)
      })
    },[usuarioValidator,sucursalValidator]);


  }
inSubmit(){

}
onSubmit(){
    let envio: Envio = new Envio();
    envio.idSucursalOrigen = this.createShipForm.get("ships.sucursal_origen_id").value;
    envio.idSucursalDestino = this.createShipForm.get("ships.sucursal_destino_id").value;
    envio.nitEmisor = this.createShipForm.get("ships.nit_emisor").value;
    envio.nitReceptor = this.createShipForm.get("ships.nit_receptor").value;
    envio.fechaLlegada = this.createShipForm.get("ships.fecha_envio").value;
    envio.subTotal = this.createShipForm.get("ships.tarifa_id").value;

    this.envioServ.save(envio).subscribe({
      next: data => {
        this.resultado = "Envio Exitoso";
        alert("Tu numero de rastreo de envio es:"+data.id)
      },
      error: err => {
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

  getPasos(){
    let pasos:Sucursal[];
    let origen, destino;
    origen = this.createShipForm.get('ships.sucursal_origen_id');
    destino = this.createShipForm.get('ships.sucursal_destino_id');
    this.rutaServicio.obtenerRutasOD(origen.value,destino.value).subscribe({
      next:data => {
        pasos = data;
        console.log(pasos);
      },
      error:err => console.log(err)
    });
  }
}
