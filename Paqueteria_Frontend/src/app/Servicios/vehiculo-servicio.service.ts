import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Vehiculo } from '../entidades/vehiculo';


@Injectable({
  providedIn: 'root'
})
export class VehiculoServicioService {

  private baseUrl:string=`${environment.MyAppApiUrl}/vehiculo`;

  constructor(private httpClient:HttpClient) { }

  getVehiculosBySucursalId(id:number):Observable<Vehiculo[]>{
    const url =`${this.baseUrl}/getVehiculosPorSucursalId?id=${id}`;
    return this.httpClient.get<Vehiculo[]>(url);
  }

  savevehiculo(vehiculo:Vehiculo):Observable<any>{
    const url=`${this.baseUrl}/save_vehiculo`;

    return this.httpClient.post<Vehiculo>(url,vehiculo);
  }

  editarVehiculo(vehiculo:Vehiculo):Observable<any>{
    const url=this.baseUrl+"/editar_vehiculo"

    return this.httpClient.post<Vehiculo>(url,vehiculo);

  }
}
