import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo = {
    username: "",
    password: ""
  };

  loginErrorMessage: String;

  constructor(private myAuthService: AuthService, private myRouter: Router) { }

  ngOnInit() {
    this.myAuthService
      .checklogin()
      .then(resultFromApi => {
        this.myRouter.navigate(['/travelcards']);
      })

      .catch(err => {
        console.log(err);
      })
  }

  doLogin() {
    this.myAuthService.login(this.loginInfo)
    .then((resultFromApi) => {
      this.loginInfo = {
        username: '',
        password: '',
      };

      this.loginErrorMessage = '',

      this.myRouter.navigate(['/travelcards']);
    })

    .catch((err) => {
      const parsedError = err.json();
      this.loginErrorMessage = parsedError.message + 'error';
    });

    console.log('Successful login')
  }

}
