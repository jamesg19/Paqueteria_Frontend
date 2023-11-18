import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent {
  sucursales: string[] = [''];
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

  descripcion='asdfasdfawefaw'

  single = [
    {
      "name": "Estimado de envios Envios",
      "value": 50,      
    },
    {
      "name": "Estimado de Ganancias",
      "value": 3200,
    },
    {
      "name": "Estimado de Gastos",
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
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
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
