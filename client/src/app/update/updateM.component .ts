import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails, TokenPayload } from '../auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateMComponent implements OnInit {
  details: UserDetails

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.updateM().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )  
  }

}
