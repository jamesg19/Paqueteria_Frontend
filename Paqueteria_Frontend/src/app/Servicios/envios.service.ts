import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroment";
import {Envio} from "../entidades/envio";
import {Observable} from "rxjs";
import {PasosEnvio} from "../entidades/pasos-envio";
import {Sucursal} from "../entidades/sucursal";
import {HistoricoSucursales} from "../entidades/historico-sucursales";

@Injectable({
  providedIn: 'root'
})
export class EnviosService {
  private baseUrl:string=environment.MyAppApiUrl + "/envios";
  private httpClient = inject(HttpClient);

  public save(envio:Envio):Observable<Envio>{
    return this.httpClient.post<Envio>(`${this.baseUrl}/save_envio`,envio);
  }

  public getEnviosSucursal(idSucursal:number):Observable<Envio>{
    return this.httpClient.get<Envio>(`${this.baseUrl}/get_sucursal_id`);
  }

  public getEnvios():Observable<Envio[]>{
    return this.httpClient.get<Envio[]>(`${this.baseUrl}/get_all`);
  }

  public savePasosEnvio(sucursales:Sucursal[],idEnvio):Observable<PasosEnvio>{
    return this.httpClient.post<PasosEnvio>(`${this.baseUrl}/save_pasos_envio?idEnvio=${idEnvio}`,sucursales);
  }

  public getPasosEnvio(idEnvio):Observable<PasosEnvio[]>{
    return this.httpClient.get<PasosEnvio[]>(`${this.baseUrl}/get_pasos_envio?idEnvio=${idEnvio}`);
  }

  public saveHistoricoSucursal(historico:HistoricoSucursales):Observable<HistoricoSucursales>{
    return this.httpClient.post<HistoricoSucursales>(`${this.baseUrl}/save_historico_sucursales`,historico);
  }
}
