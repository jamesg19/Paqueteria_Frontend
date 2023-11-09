import { Component } from '@angular/core';
import * as L from 'leaflet';
//import Openrouteservice from 'openrouteservice-js';
import * as Openrouteservice from 'openrouteservice-js';
import { OpenRouteService } from 'src/app/Servicios/open-route.service';
import { RutaService } from 'src/app/Servicios/ruta.service';
import { Ruta } from 'src/app/entidades/ruta';
@Component({
  selector: 'app-mapa-coordenada',
  templateUrl: './mapa-coordenada.component.html',
  styleUrls: ['./mapa-coordenada.component.css']
})
export class MapaCoordenadaComponent {

  
  rutaOneWay:Ruta[];
  private map;
  routeData: any;
  private readonly ORS_API_KEY = '5b3ce3597851110001cf6248a5cbc51592dd4d54aed714565157f698';
  

  constructor(private openRouteServicee:OpenRouteService, private rutaService:RutaService){

  }

  ngOnInit(): void {
    this.getData();

    
  }
  getData(){
    this.rutaService.obtenerRutasMapaCoordenadas().subscribe(
      data=>{
        this.rutaOneWay=data;
        console.log(this.rutaOneWay.length)
        console.log(this.rutaOneWay[0].origen.idSucursal)
        this.iniciarMapa();
        
      }
      ,error=>{
        alert("Error al obtener rutas")
      }
    )
  }

  private async iniciarMapa() {


    
    this.map = L.map('map').setView([13.811912249339883,-89.8681640625], 4);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    
    const puntoA = [14.702906, -91.865087];//Coatepeque
const puntoB = [14.300459, -90.785193];//Escuintla
const puntoC = [15.801999, -91.316643];//Barillas
const puntoD= [13.924807, -90.821041];//Puerto quetzal

this.getRoute(puntoA,puntoB,'blue');
this.getRoute(puntoA,puntoC,'red');
this.getRoute(puntoB,puntoD,'blue');

this.addPointInMap('Sucursal Coatepeque',puntoA);
this.addPointInMap('Sucursal Escuintla',puntoB);
this.addPointInMap('Sucursal Barillas',puntoC);
this.addPointInMap('Sucursal puerto Quetzal',puntoD);
    console.log("Punto A")
    console.log(puntoA);

    
    for(let i=0;i<this.rutaOneWay.length;i++){
      console.log(this.rutaOneWay[i].origen.longitud+","+this.rutaOneWay[i].origen.latitud);
      
      const pointOrigen=[this.rutaOneWay[i].origen.longitud,this.rutaOneWay[i].origen.latitud];
      const pointDestino=[this.rutaOneWay[i].destino.longitud,this.rutaOneWay[i].destino.latitud];

      console.log("Origen");
      console.log(pointOrigen);

      console.log("Destino");
      console.log(pointDestino);
      //agregar ruta en carretera
      //this.getRoute(pointOrigen,pointDestino,'blue');
      //await this.sleep(450);
      //agregar ruta de origen y destino en el mapa
      
      this.addPointInMap(this.rutaOneWay[i].origen.nombre,pointOrigen);
      //await this.sleep(450);
    }


  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  
  /**
   * Agregamos un marcador para ubicar la sucursal
   * 
   * @param name 
   * @param point 
   */
  addPointInMap(name:string,point:number[]){

    // Crea un marcador en las coordenadas especificadas
    const marcador = L.marker(point).addTo(this.map);

    // Puenemos un popup al marcador si deseas mostrar información al hacer clic en él
    marcador.bindPopup(name).openPopup();
  }

  /**
   * Obtenemos la ruta por carretra y usamos el servicio de getRoute
   * @param start 
   * @param end 
   * @param colorValue 
   */
  getRoute(start:number[],end:number[],colorValue:string){
    this.openRouteServicee.getRoute(start, end).subscribe(data => {
      console.log('Datos de la ruta:', this.routeData);
      const ruta = data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
            L.polyline(ruta, { color: colorValue }).addTo(this.map);
            // Ajusta el mapa para mostrar la ruta completa
            this.map.fitBounds(ruta);
      console.log('Datos de la ruta:', this.routeData);
    

    });

  }


  
  /*
  
  map: L.Map;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([15.511912249339883,-89.8681640625], 8); // Coordenadas para centrar el mapa en Washington D.C.
   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    
  }*/

}
