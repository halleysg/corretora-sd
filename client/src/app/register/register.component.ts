import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload } from "../auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    address: "",
    type: "",
    email: "",
    password: "",
    carteira: [],
    anal: false,
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/login");
      },
      err => {
        console.error(err);
      }
    );
  }
}