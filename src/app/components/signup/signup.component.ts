import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpInfo = {
    username: '',
    password: ''
  };

  errorMessage: String;

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit() {
  }

  doSignUp(){
    this.myAuth
      .signup(this.signUpInfo)
      .then(resultFromApi => {
        this.signUpInfo = { username: '', password: ''};

        this.errorMessage = '';

        this.myRouter.navigate([/travelcards]);
      })

      .catch(err => {
        const parsedError = err.json();
        this.errorMessage = parsedError.message + 'error'
      });
  }

}
