import { Component, OnInit } from '@angular/core';
import { SedesService } from '../../services/sedes.service';
import { Sede } from 'src/app/models/sede';

@Component({
  selector: 'app-sede-list',
  templateUrl: './sede-list.component.html',
  styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit {

  sedes: Sede;

  constructor(private sedeService: SedesService) { }

  ngOnInit(): void {
    this.sedeService.getSedes().subscribe(
      res => {
        this.sedes = res;
      },
      err => console.log(err)
    );
  }

}
