import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../models/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula> {
    return this.http.get(`${this.API_URI}/movies`);
  }

  getPelicula(id: String): Observable<Pelicula> {
    return this.http.get(`${this.API_URI}/movies/${id}`);
  }

  savePelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post(`${this.API_URI}/movies`, pelicula);
  }

  deletePelicula(id: String): Observable<Pelicula> {
    return this.http.delete(`${this.API_URI}/movies/${id}`);
  }

  updatePelicula(id: String, updatedPelicula: Pelicula): Observable<Pelicula> {
    return this.http.put(`${this.API_URI}/movies/${id}`, updatedPelicula);
  }
}
