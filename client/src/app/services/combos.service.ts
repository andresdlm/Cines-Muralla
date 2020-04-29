import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Combo } from '../models/combo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCombos(): Observable<Combo> {
    return this.http.get(`${this.API_URI}/combo`);
  }

  getCombo(id: String): Observable<Combo> {
    return this.http.get(`${this.API_URI}/combo/${id}`);
  }

  saveCombo(combo: Combo): Observable<Combo> {
    return this.http.post(`${this.API_URI}/combo`, combo);
  }

  deleteCombo(id: String): Observable<Combo> {
    return this.http.delete(`${this.API_URI}/combo/${id}`);
  }

  updateCombo(id: String, updatedCombo: Combo): Observable<Combo> {
    return this.http.put(`${this.API_URI}/combo/${id}`, updatedCombo);
  }
}
