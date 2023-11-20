import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ruta } from '../entidades/ruta';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import {Sucursal} from "../entidades/sucursal";
import {RutaOptima} from "../entidades/ruta-optima";

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  private baseUrl:string=environment.MyAppApiUrl;

  constructor(private httpClient:HttpClient) {

  }


  obtenerRutas(): Observable<Ruta[]> {
    // need to build URL based on product id
    const rutasUrl = `${this.baseUrl}/rutas/get_rutas`;
    return this.httpClient.get<Ruta[]>(rutasUrl);
  }
  //rutas/get_rutas_mapa

  obtenerRutasMapaCoordenadas(): Observable<Ruta[]> {
    // need to build URL based on product id
    const rutasUrl = `${this.baseUrl}/rutas/get_rutas_mapa`;

    return this.httpClient.get<Ruta[]>(rutasUrl);
  }


  obtenerRutaOptima(origen:number,destino:number):Observable<RutaOptima>{
    return this.httpClient.get<RutaOptima>(`${this.baseUrl}/ruta_optima/get_ruta?origen=${origen}&destino=${destino}`);
  }


}
