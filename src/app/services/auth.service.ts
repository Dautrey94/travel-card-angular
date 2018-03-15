import { Injectable } from '@angular/core';

import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(componentInfo) {
    return this.http.post(`${environment.apiBase}/api/signup`, {
      signUpUsername: componentInfo.username,
      signUpPassword: componentInfo.password
    },
  
  
  ).toPromise()
      .then((res) => res.json());
  }
login(componentInfo) {
  return(
    this.http
      .post(
        `${environment.apiBase}/api/login`,

        {
          loginUsername: componentInfo.username,
          loginPassword: componentInfo.password
        },

        {withCredentials: true}
      )

      .toPromise()

      .then(res => res.json())
  );
}

checklogin() {
  return (
    this.http
      .get(
        `${environment.apiBase}/api/checklogin`,

        { withCredentials: true}
      )

      .toPromise()

      .then(res => res.json())
  );
}

logout() {
  return (
    this.http
      .post(
        `${environment.apiBase}/api/logout`,

        {},

        { withCredentials: true }
      )

      .toPromise()

      .then(res => res.json())
    );
  }
}
