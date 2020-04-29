import { Component, OnInit } from '@angular/core';
import { CombosService } from 'src/app/services/combos.service';
import { Combo } from 'src/app/models/combo';

@Component({
  selector: 'app-combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['./combo-list.component.css']
})
export class ComboListComponent implements OnInit {

  combos: Combo

  constructor(private comboService: CombosService) { }

  ngOnInit(): void {
    this.comboService.getCombos().subscribe(
      res => {
        this.combos = res;
      },
      err => console.log(err)
    );
  }

}
