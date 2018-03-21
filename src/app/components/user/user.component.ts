import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TravelcardService } from '../../services/travelcard.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: any = {};
  savedCards: any = [];
  travelCards: any;
  travelCardListError: string;

  constructor(
    private myAuthService: AuthService,
    private myRouter: Router,
    private myTravelcardService: TravelcardService
  ) { }

  ngOnInit() {
    this.myAuthService
    .checklogin()
    .then(resultFromApi => {
      this.currentUser = resultFromApi;
      this.savedCards = this.currentUser.savedCards;
      console.log("saved cards are: ", this. savedCards)
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
      console.log(allTravelCards)
      this.travelCards = allTravelCards;
      console.log('travelCards in user are: +++++++++++++++++++++++++++++', this.travelCards[0].number)
    },
  () => {
      this.travelCardListError = "no travelcards :)";
    }
  );
};

}
