import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal, SucursalesDepto } from '../entidades/sucursal';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private baseUrl:string=`${environment.MyAppApiUrl}/sucursal`;

  constructor(private httpClient:HttpClient) { }

  saveSucursal(sucursal:Sucursal):Observable<any>{
    const url=`${this.baseUrl}/save_sucursal`;

    return this.httpClient.post<Sucursal>(url,sucursal);
  }

  editarSucursal(sucursal:Sucursal):Observable<any>{
    const url=environment.MyAppApiUrl+"/sucursal/editar_sucursal"

    return this.httpClient.post<Sucursal>(url,sucursal);
    
  }

  ////sucursal/get_todas_sucursales
  getSucursales(): Observable<Sucursalespageable> {
    // need to build URL based on product id
    const sucursalUrl = `${this.baseUrl}/get_todas_sucursales?page=0&size=100`;
    return this.httpClient.get<Sucursalespageable>(sucursalUrl);
  }

  
  
  getSucursalesActivas():Observable<Sucursal[]>{
    const  susursalUrl=`${this.baseUrl}/get_sucursales?estado=true`;
    return this.httpClient.get<Sucursal[]>(susursalUrl);
  }

  getSucursalId(id):Observable<Sucursal>{
    const sucursalUrl =`${this.baseUrl}/get_sucursal_id?id=${id}`;
    return this.httpClient.get<Sucursal>(sucursalUrl);
  }


  updateSucursal(event:any){

  }//http://localhost:8443/api/sucursal/get_sucursales_departamento

  getSucursalesPorDepartamento(): Observable<SucursalesDepto[]> {
    // need to build URL based on product id
    const sucursalUrl = `${this.baseUrl}/get_sucursales_departamento`;
    return this.httpClient.get<SucursalesDepto[]>(sucursalUrl);
  }


}

export interface Sucursalespageable {
  // Propiedades de la sucursal
  content: Sucursal[]
  // Otras propiedades que puedan tener las sucursales
}
