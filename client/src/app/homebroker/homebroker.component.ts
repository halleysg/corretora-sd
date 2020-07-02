import { Component, OnInit } from '@angular/core';
import { Investment } from '../investment';
import { AuthService, UserDetails } from '../auth.service';
import { InvService } from '../inv.service';


@Component({
  selector: 'app-homebroker',
  templateUrl: './homebroker.component.html',
  styleUrls: ['./homebroker.component.css']
})
export class HomebrokerComponent implements OnInit {

  details: UserDetails

  invs: Investment[]

  constructor(private auth: AuthService, private inv: InvService) { }

  ngOnInit(): void {
    this.inv.listInvs().subscribe(
      res => {
        this.invs = res
      },
      err => {
        console.error(err)
      }
    )

    this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
    
  }
}
