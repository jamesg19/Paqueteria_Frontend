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

  getAnalisisNuevaSucursal(): Observable<any> {
    // need to build URL based on product id
    const sucursalUrl = `${this.baseUrl}/nuevaSucursal`;
    const respuesta = this.httpClient.get<string>(sucursalUrl);
    console.log("La respuesta del server es: ");
    console.log(respuesta);
    return respuesta;
  }
}
