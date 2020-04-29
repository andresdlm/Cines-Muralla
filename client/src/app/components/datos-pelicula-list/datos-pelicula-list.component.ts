import { Component, OnInit } from '@angular/core';
import { DatosPelicula } from 'src/app/models/datosPelicula';
import { DatosPeliculasService } from 'src/app/services/datos-peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos-pelicula-list',
  templateUrl: './datos-pelicula-list.component.html',
  styleUrls: ['./datos-pelicula-list.component.css']
})
export class DatosPeliculaListComponent implements OnInit {

  datosPeliculas: DatosPelicula

  constructor(private datosPeliculaService: DatosPeliculasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idPelicula = this.route.snapshot.params['id'];
    this.getDatosPeliculaByPelicula(idPelicula);
  }

  getDatosPeliculaByPelicula(idPelicula: String): void {
    this.datosPeliculaService.getDatosPeliculaByPelicula(idPelicula).subscribe(
      res => {
        this.datosPeliculas = res;
      },
      err => console.log(err)
    );
  }

}
