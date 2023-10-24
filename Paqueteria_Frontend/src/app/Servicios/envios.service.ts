import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroments/enviroment";
import {Envio} from "../entidades/envio";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnviosService {
  private baseUrl:string=environment.MyAppApiUrl + "/envios";
  private httpClient = inject(HttpClient);

  public save(envio:Envio):Observable<Envio>{
    console.log(envio);
    return this.httpClient.post<Envio>(`${this.baseUrl}/save_envio`,envio);
  }

  public getEnviosSucursal(idSucursal:number):Observable<Envio>{
    return this.httpClient.get<Envio>(`${this.baseUrl}/get_sucursal_id`);
  }

  public getEnvios():Observable<Envio[]>{
    return this.httpClient.get<Envio[]>(`${this.baseUrl}/get_all`);
  }
}
