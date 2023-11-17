import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from 'src/app/Servicios/sucursal.service';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent {
  sucursales: string[] = ['sucursal1'];
  distancias: string[] = [''];
  latitud: string = '';
  longitud: string = '';
  cantidadVehiculos: string = '';
  cantidadPersonal: string = '';

  agregarSucursal() {
    this.sucursales.push('');
    this.distancias.push('');
  }

  quitarSucursal(index: number) {
    if (this.sucursales.length > 1) {
      this.sucursales.splice(index, 1);
      this.distancias.splice(index, 1);
    }
  }

  enviarFormulario() {
    // Agrega la lógica de envío del formulario según tus necesidades
    console.log('Sucursales:', this.sucursales);
    console.log('Distancias:', this.distancias);
  }
  
}
