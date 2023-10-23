import {HttpClient, HttpStatusCode} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Persona } from '../entidades/persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl:string=environment.MyAppApiUrl + "/personas";

  constructor(private httpClient: HttpClient) { }

  getPersonaNit(nit): Observable<Persona>{
    const personaUrl = `${this.baseUrl}/get_persona_nit?nit=${nit}`;
    return this.httpClient.get<Persona>(personaUrl);
  }
  getPersonas():Observable<Persona[]>{
    const personaUrl = `${this.baseUrl}/get_personas`;
    return this.httpClient.get<Persona[]>(personaUrl);

  }
  save(persona:Persona):Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}/save_persona`, persona);
  }

  editar(persona:Persona):Observable<any>{
    return this.httpClient.put<any>(`${this.baseUrl}/editar_persona`, persona);
  }
}
