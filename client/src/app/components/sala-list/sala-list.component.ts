import { Component, OnInit } from '@angular/core';
import { SalasService } from '../../services/salas.service';
import { Sala } from 'src/app/models/sala';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sala-list',
  templateUrl: './sala-list.component.html',
  styleUrls: ['./sala-list.component.css']
})
export class SalaListComponent implements OnInit {

  constructor(private salasService: SalasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idSede = this.route.snapshot.params['id'];
    this.getSalasBySede(idSede);
  }
  
  salas: Sala;

  getSalasBySede(idSede: String): void {
    this.salasService.getSalaBySede(idSede).subscribe(
      res => {
        this.salas = res;
      },
      err => console.log(err)
    )
  }

}
