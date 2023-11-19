import { Component, inject } from '@angular/core';
import { ReportesService } from 'src/app/Servicios/reportes.service';

@Component({
  selector: 'app-mov-vehiculo',
  templateUrl: './mov-vehiculo.component.html',
  styleUrls: ['./mov-vehiculo.component.css']
})
export class MovVehiculoComponent {
  //En datos tienen que estar, movimientos realizados, envios enviados, 

  vehiculoForm: string = '';   
  datos: any[];  
  fechaAnalizar: any;
  vehiculosSelect: any[];

  constructor(){
    this.getVehiculos();
  }
  
  enviarFormulario(){
    this.getReporte();
  }

  
  reportesServ = inject(ReportesService);  
  getReporte(){
    this.reportesServ.getReporteMovVehiculo(this.vehiculoForm).subscribe({
      next: data => {
        this.datos = data.datos;
        this.datostable = data.datostable;
      },
      error: err => {
        console.log("Error:",err)
      }
    });
  }

  getVehiculos(){
    this.reportesServ.getAllVehiculos().subscribe({
      next: data => {
        this.vehiculosSelect = data;
      },
      error: err => {
      }
    });
  }

  view: [number,number] = [900, 400];
  cardColor: string = '#232837';

  onSelectCards(event:any) {
    console.log(event);
  }

  datostable = [
    { fecha: '2023-11-20', sucursal: 'Sucursal J', capacidad: 100 },
    { fecha: '2023-11-21', sucursal: 'Sucursal B', capacidad: 150 },    
  ];

}
