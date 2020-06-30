import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  carteira = [];
  insvestmentModel = new Investment(1, '', '', '','');

}
