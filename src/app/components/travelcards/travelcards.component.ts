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
  currentUser:any = {};
  isAdded: boolean = true;
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
        console.log('user id: ', this.currentUser._id);
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
      console.log('travelCards ========================', this.travelCards[0].number)
    },
  () => {
      this.travelCardListError = "no travelcards :)";
    }
  );
};

addTheCard(userId, cardId){
 this.myTravelcardService.sendTheCard(userId, cardId)
  .then(res => {
    console.log("=============================", this.isAdded)
    this.isAdded = false;
    console.log("res from sending the data is: ", res)
  })
  .catch( err => {
    console.log('err is: ', err)
  } )
}

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
