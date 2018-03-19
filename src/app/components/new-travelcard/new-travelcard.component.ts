import { Component, OnInit } from '@angular/core';
import { TravelcardService } from '../../services/travelcard.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-travelcard',
  templateUrl: './new-travelcard.component.html',
  styleUrls: ['./new-travelcard.component.css']
})
export class NewTravelcardComponent implements OnInit {

  travelCardData = {
    number: '',
    socialMedia: '',
    travelPlan: ''
  }

  saveError: String;

  constructor(
    private myTravelcardService: TravelcardService,
    private myAuthService: AuthService,
    private myRouter: Router) { }

    ngOnInit() {
      this.myAuthService
        .checklogin()
        .then()
        .catch(err => {
          console.log(err);
          this.myRouter.navigate(['/']);
        });
  }

  saveNewTravelCard(){
    this.myTravelcardService.createNewTravelCard(this.travelCardData)
    .then(newTravelCard => {
      this.travelCardData ={
        number: '',
        socialMedia: '',
        travelPlan: ''
      }
      this.saveError = "";
      this.myRouter.navigate(['/travelcards'])
    })
    .catch(err => {this.saveError = 'saving error'})
  };

}
