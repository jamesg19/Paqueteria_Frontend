import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenRouteService {

  private apiUrl = 'https://api.openrouteservice.org/v2/directions/driving-car';
  private apiKey = '5b3ce3597851110001cf62481d0eb130914f44bc8a46fdec652513d3'; // Reemplaza con tu clave de API de OpenRouteService

  constructor(private http: HttpClient) {}

  getRoute(puntoA:number[], puntoB:number[]): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&start=${puntoA[1]},${puntoA[0]}&end=${puntoB[1]},${puntoB[0]}`;
    console.log(url);
    return this.http.get(url);
  }
}
