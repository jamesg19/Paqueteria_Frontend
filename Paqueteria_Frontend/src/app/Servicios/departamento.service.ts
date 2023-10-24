import { Injectable } from '@angular/core';
import { Departamento } from '../entidades/departamento';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Municipio } from '../entidades/municipio';


@Injectable({
  providedIn: 'root'
})

export class DepartamentoService {
  private baseUrl:string=environment.MyAppApiUrl;

  constructor(private httpClient: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> {
    // need to build URL based on product id
    const departamentoUrl = `${this.baseUrl}/departamentos/get_departamentos`;
    return this.httpClient.get<Departamento[]>(departamentoUrl);
  }
  getDepartamentosId(id:number): Observable<Departamento[]> {
    // need to build URL based on product id
    const departamentoUrl = `${this.baseUrl}/departamentos/get_departamento?id=${id}`;
    return this.httpClient.get<Departamento[]>(departamentoUrl);
  }
  ///municipios/get_municipios?id=9

  getMunicipiosDeptoId(id:number): Observable<Municipio[]> {
    // need to build URL based on product id
    const departamentoUrl = `${this.baseUrl}/municipios/get_municipios?id=${id}`;
    return this.httpClient.get<Municipio[]>(departamentoUrl);
    
  }

}


