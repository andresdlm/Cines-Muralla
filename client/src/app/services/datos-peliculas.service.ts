import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosPelicula } from '../models/datosPelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPeliculasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getDatosPeliculas(): Observable<DatosPelicula> {
    return this.http.get(`${this.API_URI}/datosPelicula`);
  }

  getDatosPeliculaByPelicula(id: String): Observable<DatosPelicula> {
    return this.http.get(`${this.API_URI}/datosPelicula/${id}`);
  }

  saveDatosPelicula(datosPelicula: DatosPelicula): Observable<DatosPelicula> {
    return this.http.post(`${this.API_URI}/datosPelicula`, datosPelicula);
  }

  deleteDatosPelicula(id: String): Observable<DatosPelicula> {
    return this.http.delete(`${this.API_URI}/datosPelicula/${id}`);
  }

  updateDatosPelicula(id: String, updatedDatosPelicula: DatosPelicula): Observable<DatosPelicula> {
    return this.http.put(`${this.API_URI}/datosPelicula/${id}`, updatedDatosPelicula);
  }
}
