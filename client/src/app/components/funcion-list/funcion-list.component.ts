import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/services/funciones.service';
import { Funcion } from 'src/app/models/funcion';

@Component({
  selector: 'app-funcion-list',
  templateUrl: './funcion-list.component.html',
  styleUrls: ['./funcion-list.component.css']
})
export class FuncionListComponent implements OnInit {

  funciones: Funcion;

  constructor(private funcionService: FuncionesService) { }

  ngOnInit(): void {
    this.funcionService.getFunciones().subscribe(
      res => {
        this.funciones = res;
      },
      err => console.log(err)
    );
  }

}
