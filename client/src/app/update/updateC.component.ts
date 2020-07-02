import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails, TokenPayload } from '../auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateCComponent implements OnInit {
  details: UserDetails

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  
  }

}
