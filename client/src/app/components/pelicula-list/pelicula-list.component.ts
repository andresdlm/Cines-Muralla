import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas: Pelicula;

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe(
      res => {
        this.peliculas = res;
      },
      err => console.log(err)
    )
  }

}
