import {inject, Injectable} from '@angular/core';
import {environment} from "../../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";
import {Envio} from "../entidades/envio";
import {Observable} from "rxjs";
import {Variables} from "../entidades/variables";

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private baseUrl:string=environment.MyAppApiUrl + "/variables";
  private httpClient = inject(HttpClient);

  public save(variable:Variables,id):Observable<Variables>{
    return this.httpClient.post<Variables>(`${this.baseUrl}/update?id=${id}`,variable);
  }

  public getAll():Observable<Variables[]>{
    return this.httpClient.get<Variables[]>(`${this.baseUrl}/get_all`);
  }
  constructor() { }
}
