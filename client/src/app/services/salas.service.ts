import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sala } from '../models/sala';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getSalas(): Observable<Sala> {
    return this.http.get(`${this.API_URI}/salas`);
  }

  getSalaBySede(id: String): Observable<Sala> {
    return this.http.get(`${this.API_URI}/salas/${id}`);
  }

  saveSala(sala: Sala): Observable<Sala> {
    return this.http.post(`${this.API_URI}/salas`, sala);
  }

  deleteSala(id: String): Observable<Sala> {
    return this.http.delete(`${this.API_URI}/salas/${id}`);
  }

  updateSala(id: String, updatedSala: Sala): Observable<Sala> {
    return this.http.put(`${this.API_URI}/salas/${id}`, updatedSala);
  }
}
