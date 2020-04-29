import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcion } from '../models/funcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getFunciones(): Observable<Funcion> {
    return this.http.get(`${this.API_URI}/funcion`);
  }

  getFuncion(id: String): Observable<Funcion> {
    return this.http.get(`${this.API_URI}/funcion/${id}`);
  }

  saveFuncion(funcion: Funcion): Observable<Funcion> {
    return this.http.post(`${this.API_URI}/funcion`, funcion);
  }

  deleteFuncion(id: String): Observable<Funcion> {
    return this.http.delete(`${this.API_URI}/funcion/${id}`);
  }

  updateFuncion(id: String, updatedFuncion: Funcion): Observable<Funcion> {
    return this.http.put(`${this.API_URI}/funcion/${id}`, updatedFuncion);
  }
}
