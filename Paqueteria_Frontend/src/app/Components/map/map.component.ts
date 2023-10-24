import { Component, ElementRef } from '@angular/core';
import { SucursalService } from 'src/app/Servicios/sucursal.service';
import { SucursalesDepto } from 'src/app/entidades/sucursal';
declare var anychart: any; 
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(private elementRef: ElementRef, private sucursalService:SucursalService) { }
  
  mapas:SucursalesDepto[];
  total:number=0;;
  
  ngOnInit(): void {
    this.getData()
    
    
  }
  getData(){
    this.sucursalService.getSucursalesPorDepartamento().subscribe(
      data=>{ 
        this.mapas=data
        console.log(this.mapas)
        this.drawMap();
      }, error=>{
        alert("error en datos del mapa")
      }
    )
  }
  contarSucursales(){
    this.total=0;
    for(let i=0;i<this.mapas.length;i++){
      this.total+= this.mapas[i].cantidadSucursales;
    }

  }

  drawMap() {
    const QZ=2;
    this.contarSucursales();
    const arr=this.mapas;
    
    anychart.onDocumentReady(function () {
      var dataSet = []

      
      for(let i=0;i<arr.length;i++){
        
        if(arr[i].cantidadSucursales>0){
          dataSet.push({'id': 'GT.'+arr[i].idDepartamento1, 'value': arr[i].cantidadSucursales,'fill': '#6BD43A' });
        }else{
          dataSet.push({'id': 'GT.'+arr[i].idDepartamento1, 'value': arr[i].cantidadSucursales,'fill': '#D3D3D3' });
        }
      }
      
      /*var dataSet = [
        {'id': 'GT.BV', 'value': 0,'fill': '#D3D3D3' },
        {'id': 'GT.HU', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.PE', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.QZ', 'value': QZ, 'fill': '#6BD43A'}, 
        {'id': 'GT.RE', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.SM', 'value': 0, 'fill': '#D3D3D3'}, 
        {'id': 'GT.AV', 'value': 0,'fill': '#D3D3D3'}, 				 
        {'id': 'GT.CM', 'value': 0,'fill': '#D3D3D3'},                
        {'id': 'GT.ES', 'value': 0,'fill': '#D3D3D3'},
        {'id': 'GT.GU', 'value': 0, 'fill': '#6BD43A'},
        {'id': 'GT.SU', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.SA', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.SO', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.TO', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.PR', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.SR', 'value': 0,'fill': '#D3D3D3'}, 				 
        {'id': 'GT.IZ', 'value': 0,'fill': '#D3D3D3'},                
        {'id': 'GT.CQ', 'value': 0,'fill': '#D3D3D3'},
        {'id': 'GT.JA', 'value': 0,'fill': '#D3D3D3'},                
        {'id': 'GT.JU', 'value': 0,'fill': '#D3D3D3'}, 
        {'id': 'GT.ZA', 'value': 0,'fill': '#D3D3D3'},                
        {'id': 'GT.QC', 'value': 0,'fill': '#D3D3D3'} , 
      ];*/


      var map = anychart.map();
      map.geoData(anychart.maps.guatemala);

      var series = map.choropleth(dataSet);
      series.labels(false);

      map.container('map-container');
      map.draw();
    });
  }

  
  

}
