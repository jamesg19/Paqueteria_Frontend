import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {
  private baseUrl:string=`${environment.MyAppApiUrl}/analisis`;

  constructor(private httpClient:HttpClient) { }

  getAnalisisNuevaSucursal(longitud:string,latitud:string,cantidadVehiculos:string
    ,cantidadPersonal:string, sucursales:any, distancias:any): Observable<any> {
    const cuerpoSolicitud = {
      longitud: longitud,
      latitud:latitud,
      cantidadVehiculos:cantidadVehiculos,
      cantidadPersonal:cantidadPersonal,
      sucursales: sucursales,
      distancias:distancias
    };
    const sucursalUrl = `${this.baseUrl}/nuevasucursal`;    
    const respuesta = this.httpClient.post<any>(sucursalUrl, cuerpoSolicitud);
    return respuesta;
  }


  getAnalisisNuevosVehiculos(cantidadVehiculos:string,sucursalForm:string): Observable<any> {
    // need to build URL based on product id
    const sucursalUrl = `${this.baseUrl}/nuevosVehiculos?cantidadVehiculos=${cantidadVehiculos}&sucursalForm=${sucursalForm}`;
    const respuesta = this.httpClient.get<string>(sucursalUrl);
    return respuesta;
  }

  getAnalisisNuevasRuta(sucursalorigen:string, sucursales:any,distancias:any): Observable<any> {
    const cuerpoSolicitud = {
      sucursalorigen: sucursalorigen,
      sucursales: sucursales,
      distancias:distancias
    };
    const sucursalUrl = `${this.baseUrl}/nuevaruta`;    
    const respuesta = this.httpClient.post<any>(sucursalUrl, cuerpoSolicitud);
    return respuesta;
  }
}
