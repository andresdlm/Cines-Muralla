import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comida } from '../models/comida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getComidas(): Observable<Comida> {
    return this.http.get(`${this.API_URI}/comida`);
  }

  getComida(id: String): Observable<Comida> {
    return this.http.get(`${this.API_URI}/comida/${id}`);
  }

  saveComida(comida: Comida): Observable<Comida> {
    return this.http.post(`${this.API_URI}/comida`, comida);
  }

  deleteComida(id: String): Observable<Comida> {
    return this.http.delete(`${this.API_URI}/comida/${id}`);
  }

  updateComida(id: String, updatedComida: Comida): Observable<Comida> {
    return this.http.put(`${this.API_URI}/comida/${id}`, updatedComida);
  }
}
