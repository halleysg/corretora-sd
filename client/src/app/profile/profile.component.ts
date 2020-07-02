import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails

  constructor(private auth: AuthService, private router: Router) { }
  
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

  updateC(){
    this.auth.updateC().subscribe(
     user => {
        this.details = user
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err)
      }
    )       
  } 

  updateM(){
    this.auth.updateM().subscribe(
     user => {
        this.details = user
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err)
      }
    )       
  } 

  updateA(){
    this.auth.updateA().subscribe(
     user => {
        this.details = user
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err)
      }
    )       
  } 

  getType() {
    return this.details.type;
  }
}
