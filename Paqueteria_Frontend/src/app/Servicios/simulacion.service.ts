import { Injectable } from '@angular/core';
import { Simulacion } from '../entidades/simulacion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import {ReporteSimulacion} from "../entidades/reporte-simulacion";

@Injectable({
  providedIn: 'root'
})
export class SimulacionService {


  constructor(private httpClient: HttpClient) { }

  public simular():Observable<Simulacion>{
    const  baseUrl:string=environment.MyAppApiUrl + "/simular/simular";
    return this.httpClient.get<Simulacion>(`${baseUrl}`);
  }

  public reportes():Observable<ReporteSimulacion[]>{
    const  baseUrl:string=environment.MyAppApiUrl + "/simular/reporte";
    return this.httpClient.get<ReporteSimulacion[]>(`${baseUrl}`);
  }
}
