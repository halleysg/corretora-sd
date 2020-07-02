import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';
import { Router } from "@angular/router";
import { InvService } from '../inv.service';

@Component({
  selector: 'app-analista',
  templateUrl: './analista.component.html',
  styleUrls: ['./analista.component.css']
})
export class AnalistaComponent implements OnInit {
  sendInv: boolean
  axios = require('axios')

  inv: Investment = {
    id: 0,
    name: "",
    price: "",
    leg: "",
    type: "",
    quant: 0,
  };

  constructor(private auth: InvService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.inv).subscribe(
      () => {
        this.router.navigateByUrl("/profile/homebroker");
        this.message(this.inv.type, this.inv.name, this.inv.price, this.inv.leg)
      },
      err => {
        console.error(err);
      }
    );
  }

  message(profile: string, invName: string, invPrice:string, invType:string) {
    let url;
    switch (profile) {
      case "Conservador":
        url = "https://hooks.slack.com/services/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"
        break;
      case "Moderado":
        url = "https://hooks.slack.com/services/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"
        break;
      case "Arrojado":
        url = "https://hooks.slack.com/services/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"
        break;
    }

    var postData = {
      text: "Um novo investimento do tipo " + profile + " foi criado! Nome: " + invName + "Preço: " + invPrice + "R$ Tipo: " + invType,
    };

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    this.axios.post(url, postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }
}
