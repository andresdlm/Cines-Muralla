import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { ComidasService } from 'src/app/services/comidas.service';

@Component({
  selector: 'app-comida-list',
  templateUrl: './comida-list.component.html',
  styleUrls: ['./comida-list.component.css']
})
export class ComidaListComponent implements OnInit {

  comidas: Comida;

  constructor(private comidaService: ComidasService) { }

  ngOnInit(): void {
    this.comidaService.getComidas().subscribe(
      res => {
        this.comidas = res;
      },
      err => console.log(err)
    );
  }

}
