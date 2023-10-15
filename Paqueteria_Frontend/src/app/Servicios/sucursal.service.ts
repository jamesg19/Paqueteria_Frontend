import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal } from '../entidades/sucursal';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private httpClient:HttpClient) { }

  saveSucursal(sucursal:Sucursal):Observable<any>{
    const url=environment.MyAppApiUrl+"/sucursal/save_sucursal"

    return this.httpClient.post<Sucursal>(url,sucursal);
  }


  
}
