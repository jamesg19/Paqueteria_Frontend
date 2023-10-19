import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Persona } from '../entidades/persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl:string=environment.MyAppApiUrl;

  constructor(private httpClient: HttpClient) { }

  getPersonaNit(nit:String): Observable<Persona>{
    const personaUrl = `${this.baseUrl}/personas/get_persona_nit?nit=`+nit;
    return this.httpClient.get<Persona>(personaUrl);
  }

  save(persona:Persona){
    const url=environment.MyAppApiUrl+"/persona/save_persona";
    console.log(persona+"\nEs lo que envia a post");
    return this.httpClient.post(url,persona);
  }
}
