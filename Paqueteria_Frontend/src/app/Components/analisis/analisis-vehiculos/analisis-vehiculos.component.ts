import { Component, inject } from '@angular/core';
import {SucursalService} from "../../../Servicios/sucursal.service";
import { AnalisisService } from 'src/app/Servicios/analisis.service';
import {Sucursal} from "../../../entidades/sucursal";

@Component({
  selector: 'app-analisis-vehiculos',
  templateUrl: './analisis-vehiculos.component.html',
  styleUrls: ['./analisis-vehiculos.component.css']
})
export class AnalisisVehiculosComponent {
  sucursalForm: string = '';
  cantidadVehiculos: string = '';
  sucursalServ = inject(SucursalService);
  sucursalesSelect:Sucursal[];
  analisisServ = inject(AnalisisService);
  descripcion='asdfasdfawefaw';
  recomendacion = '';
  datos: any[];
  multiDatos: any[];

  constructor(){
    this.getSucursales();
  }


  enviarFormularioVehiculos(){
    this.getVehiculosSucursal();
  }

  getSucursales(){
    this.sucursalServ.getSucursalesActivas().subscribe({
      next: data => {
        this.sucursalesSelect = data;
      },
      error: err => {
      }
    });
  }

  getVehiculosSucursal(){    
    this.analisisServ.getAnalisisNuevosVehiculos(this.cantidadVehiculos,this.sucursalForm).subscribe({
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
  }


  single = [
    {
      "name": "Estimado de envios realizados por nuevos vehiculos",
      "value": 50,      
    },
    {
      "name": "Estimado de gastos por gasolina",
      "value": 3200,
    },
    {
      "name": "Estimado de ganancias",
      "value": 3800,
    },
    {
      "name": "Cantidad de Vehiculos",
      "value": 3,
    },
    {
      "name": "Cantidad de empleados",
      "value": 5,
    },
    {
      "name": "Cantidad de rutas",
      "value": 2,
    }
  ]

  view: [number,number] = [900, 400];
  cardColor: string = '#232837';

  onSelectCards(event:any) {
    console.log(event);
  }

  multi = [
    {
      "name": "Gastos",
      "series": [
        {
          "name": "0",
          "value": 0
        },
        {
          "name": "6 meses",
          "value": 1500
        },
        {
          "name": "1 año",
          "value": 3800
        }
      ]
    },
  
    {
      "name": "Ganancias",
      "series": [
        {
          "name": "0",
          "value": 0
        },
        {
          "name": "6 meses",
          "value": 2500
        },
        {
          "name": "1 año",
          "value": 3200
        }
      ]
    },
  ];
  
  // options
  view2: [number,number] = [900, 400];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Tiempo';
  yAxisLabel: string = 'Cantidad Q.';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
