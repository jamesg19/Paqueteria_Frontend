import { Component } from '@angular/core';
import { Dato } from './dato.interface';

@Component({
  selector: 'app-mov-vehiculo',
  templateUrl: './mov-vehiculo.component.html',
  styleUrls: ['./mov-vehiculo.component.css']
})
export class MovVehiculoComponent {
  //En datos tienen que estar, movimientos realizados, envios enviados, 

  vehiculoForm: string = '';   
  datos: any[];
  multiDatos: any[];
  fechaAnalizar: any;

  constructor(){
    //this.getSucursales();
  }
  
  enviarFormulario(){
    console.log("Enviar formulario");
    this.getReporteSucursal();
  }

  /*
  sucursalServ = inject(SucursalService);
  sucursalesSelect:Sucursal[];
  getSucursales(){
    this.sucursalServ.getSucursalesActivas().subscribe({
      next: data => {
        this.sucursalesSelect = data;
      },
      error: err => {
      }
    });
  }
  
  */

  

  getReporteSucursal(){    
    /*this.analisisServ.getAnalisisNuevosVehiculos(this.cantidadVehiculos,this.sucursalForm).subscribe({
      next: data => {
        this.descripcion = data.descripcion;
        this.recomendacion = data.recomendacion;
        this.datos = data.datos;
        this.multiDatos = data.multiDatos;
      },
      error: err => {
        console.log(err)
      }
    });
    */
  }

  view: [number,number] = [900, 400];
  cardColor: string = '#232837';

  onSelectCards(event:any) {
    console.log(event);
  }

  datostable: Dato[] = [
    { fecha: '2023-11-20', sucursal: 'Sucursal A', capacidad: 100 },
    { fecha: '2023-11-21', sucursal: 'Sucursal B', capacidad: 150 },
    // ... otros datos
  ];

}
