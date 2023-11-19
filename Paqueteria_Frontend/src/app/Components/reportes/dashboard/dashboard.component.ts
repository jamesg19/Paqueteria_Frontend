import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  fechaAnalizar = Date();
  formulario: FormGroup;

  enviarFormularioFecha(){
    if (this.formulario.valid) {      
      //Formulario valido
      console.log('Fecha seleccionada:', this.formulario.value.fechaAnalizar);

    } else {
      // El formulario no es valido
      alert('Por favor, complete todos los campos obligatorios.');
    }    
  }

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con validadores
    this.formulario = this.fb.group({
      fechaAnalizar: ['', Validators.required]
    });
  }


  single = [
    {
      "name": "Envios en ruta",
      "value": 50,      
    },
    {
      "name": "Envios completados",
      "value": 3200,
    },
    {
      "name": "Ganancias Totales",
      "value": 3800,
    },
    {
      "name": "Gastos totales",
      "value": 3,
    },
    {
      "name": "Margen de beneficios",
      "value": 5,
    },
    {
      "name": "Porcentaje de ganancias",
      "value": 5,
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



  //Opciones del grafico de pie

  view3: any[] = [900, 400];
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels3: boolean = true;
  isDoughnut: boolean = false;  


  onSelect2(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate2(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate2(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  //Opciones del grafico de barras
  view4: [number,number] = [900, 400];
  showXAxis4 = true;
  showYAxis4 = true;
  gradient4 = false;
  showLegend4 = true;
  showXAxisLabel4 = true;
  xAxisLabel4 = 'Sucursal';
  showYAxisLabel4 = true;
  yAxisLabel4 = 'Ganancias Q.';

  onSelect4(event:any) {
    console.log(event);
  }
}
