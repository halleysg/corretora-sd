import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';
import { AuthService, UserDetails } from '../auth.service';


@Component({
  selector: 'app-homebroker',
  templateUrl: './homebroker.component.html',
  styleUrls: ['./homebroker.component.css']
})
export class HomebrokerComponent implements OnInit {

  details: UserDetails

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }

  dispInvestments = [
    new Investment(1, 'Petrobras', '20,50', 'Arrojado', 'Ação', 0),
    new Investment(2, 'HGLG', '10,12', 'Moderado', 'FII', 0),
    new Investment(3, 'Selic', '100,00', 'Conservador', 'Renda Fixa', 0),
    new Investment(4, 'KNRI', '20,20', 'Moderado', 'FII', 0),
  ];
  insvestmentModel = new Investment(1, '', '', '', '', 0);

  add() {
    this.dispInvestments.push(new Investment(
      this.insvestmentModel.id,
      this.insvestmentModel.name,
      this.insvestmentModel.price,
      this.insvestmentModel.leg,
      this.insvestmentModel.type,
      this.insvestmentModel.quant
    ));
  }

}
