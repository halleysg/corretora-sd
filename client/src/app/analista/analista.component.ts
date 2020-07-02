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
  
  inv: Investment = {
    id: 0,
    name: "",
    price: "",
    leg: "",
    type: "",
    quant:0,
  };

  constructor(private auth: InvService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.inv).subscribe(
      () => {
        this.router.navigateByUrl("/profile/analista");
        this.genType();
      },
      err => {
        console.error(err);
      }
    );
  }

  genType(){
    if(this.inv.leg=="Ação"){
      this.inv.type = "Arrojado";
    }
    if(this.inv.leg=="FII"){
      this.inv.type = "Moderado";
    }
    if(this.inv.leg=="Renda Fixa"){
      this.inv.type = "Conservador";  
    }
  }
}
