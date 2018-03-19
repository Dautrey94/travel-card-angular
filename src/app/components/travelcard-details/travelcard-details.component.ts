import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TravelcardService } from '../../services/travelcard.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-travelcard-details',
  templateUrl: './travelcard-details.component.html',
  styleUrls: ['./travelcard-details.component.css']
})
export class TravelcardDetailsComponent implements OnInit {
  travelcard = <any>{}
  currentUser = <any>{}

  constructor(
    private myTravelcardService: TravelcardService,
    private myAuthService: AuthService,
    private myRoute: ActivatedRoute,
    private myRouter: Router
  ) { }

  ngOnInit() {
    this.myAuthService
    .checklogin()
    .then(res => {
      this.currentUser = res;
      console.log('current user is: ', this.currentUser._id)
    })
    .catch(err => {
      console.log(err);
      this.myRouter.navigate(['/']);
    });
    this.myRoute.params.subscribe(params => {
      console.log("params", params)
      this.getTravelCardDetails(params['id']);
    })
  }

  getTravelCardDetails(id){
    this.myTravelcardService.getId(id)
    .then(res => {
      this.travelcard = res;
      console.log('travelcard details: ', res)
    })
    .catch
  }

}
