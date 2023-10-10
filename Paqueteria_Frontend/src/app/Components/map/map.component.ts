import { Component, ElementRef } from '@angular/core';
declare var anychart: any; 
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.drawMap();
    
  }

  drawMap() {
    const QZ=1903;
    anychart.onDocumentReady(function () {
      var dataSet = [
        {'id': 'GT.BV', 'value': 300},
        {'id': 'GT.HU', 'value': 230}, 
        {'id': 'GT.PE', 'value': 240}, 
        {'id': 'GT.QZ', 'value': QZ, 'fill': '#6BD43A'}, 
        {'id': 'GT.RE', 'value': 130,'fill': '#D3D3D3'}, 
        {'id': 'GT.SM', 'value': 190, 'fill': '#D3D3D3'}, 
        {'id': 'GT.AV', 'value': 100}, 				 
        {'id': 'GT.CM', 'value': 305},                
        {'id': 'GT.ES', 'value': 190},
        {'id': 'GT.GU', 'value': 300},
        {'id': 'GT.SU', 'value': 230}, 
        {'id': 'GT.SA', 'value': 240}, 
        {'id': 'GT.SO', 'value': 275}, 
        {'id': 'GT.TO', 'value': 130}, 
        {'id': 'GT.PR', 'value': 190}, 
        {'id': 'GT.SR', 'value': 100}, 				 
        {'id': 'GT.IZ', 'value': 305},                
        {'id': 'GT.CQ', 'value': 190},
        {'id': 'GT.JA', 'value': 305},                
        {'id': 'GT.JU', 'value': 190}, 
        {'id': 'GT.ZA', 'value': 305},                
        {'id': 'GT.QC', 'value': 190} , 
      ];

      var map = anychart.map();
      map.geoData(anychart.maps.guatemala);

      var series = map.choropleth(dataSet);
      series.labels(false);

      map.container('map-container');
      map.draw();
    });
  }

  
  

}
