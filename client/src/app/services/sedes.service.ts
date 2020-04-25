import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sede } from '../models/sede';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getSedes(): Observable<Sede> {
    return this.http.get(`${this.API_URI}/sedes`);
  }

  getSede(id: String): Observable<Sede> {
    return this.http.get(`${this.API_URI}/sedes/${id}`);
  }

  saveSede(sede: Sede): Observable<Sede> {
    return this.http.post(`${this.API_URI}/sedes`, sede);
  }

  deleteSede(id: String): Observable<Sede> {
    return this.http.delete(`${this.API_URI}/sedes/${id}`);
  }

  updateSede(id: String, updatedSede: Sede): Observable<Sede> {
    return this.http.put(`${this.API_URI}/sedes/${id}`, updatedSede);
  }
}
