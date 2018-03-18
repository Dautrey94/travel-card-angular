import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TravelcardService } from '../../services/travelcard.service';

@Component({
  selector: 'app-travelcards',
  templateUrl: './travelcards.component.html',
  styleUrls: ['./travelcards.component.css']
})
export class TravelcardsComponent implements OnInit {
  logoutError: string;
  travelCardListError: string;
  travelCards: any;
  currentUser: string;

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myTravelcardService: TravelcardService
  ) {}

  ngOnInit() {
    this.myAuthService
      .checklogin()
      .then(resultFromApi => {
        this.currentUser = resultFromApi;
        console.log('user is: ', resultFromApi);
        this.getTheTravelCards()
      })

      .catch(err => {
        console.log(err);
        this.myRouter.navigate(['/']);
      });
  }

  getTheTravelCards() {
    this.myTravelcardService.getAllTravelCards()
    .subscribe(allTravelCards => {
      this.travelCards = allTravelCards;
      console.log('travelCards', this.travelCards)
    },
  () => {
      this.travelCardListError = "no travelcards,";
    }
  );
};

  logMeOutPls() {
    this.myAuthService
    .logout()
    .then(() => {
      this.myRouter.navigate(['/']);
    })
    .catch(() => {
      this.logoutError = "Something went wrong";
    });
  }
}