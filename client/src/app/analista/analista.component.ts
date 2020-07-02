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
      },
      err => {
        console.error(err);
      }
    );
  }
}
