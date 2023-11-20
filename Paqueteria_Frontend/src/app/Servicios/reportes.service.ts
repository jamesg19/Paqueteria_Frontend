import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {  
  private baseUrl:string=`${environment.MyAppApiUrl}/reportes`;

  constructor(private httpClient:HttpClient) { }

  getReporteDashboard(fechaAnalizar:string): Observable<any> {
    const sucursalUrl = `${this.baseUrl}/dashboard`;
    const respuesta = this.httpClient.post<any>(sucursalUrl, fechaAnalizar);
    return respuesta;
  }

  getReporteMovSucursal(fechaAnalizar:string, sucursalForm:string): Observable<any> {
    const cuerpoSolicitud = {
      fechaAnalizar: fechaAnalizar,
      sucursalForm: sucursalForm
    };
    const sucursalUrl = `${this.baseUrl}/movsucursal`;    
    const respuesta = this.httpClient.post<any>(sucursalUrl, cuerpoSolicitud);
    return respuesta;
  } 

  getReporteMovVehiculo(vehiculoForm:string): Observable<any> {
    const sucursalUrl = `${this.baseUrl}/movvehiculo`;             
    const respuesta = this.httpClient.post<any>(sucursalUrl, vehiculoForm);
    return respuesta;
  }

  getAllVehiculos(): Observable<any> {
    const sucursalUrl = `${this.baseUrl}/vehiculos`;
    const respuesta = this.httpClient.get<string>(sucursalUrl);    
    return respuesta;
  }

}
