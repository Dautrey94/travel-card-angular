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
  show: boolean = true;
  baseUrl = environment.apiBase;
  updatedTravelCardNum: String;
  updatedTravelCardSocial: String;
  updatedTravelPlan: String;
  updatedTravelCard: Object = {};

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
      console.log('travelcard details: ', this.travelcard.owner)
    })
    .catch
  }

  showForm(){
    this.show = !this.show;
  }



  doTheUpdate(id, formData) {
    this.myTravelcardService.updateTravelCard(id, formData)

    const formInfo = formData.form.controls
    this.updatedTravelCardNum = formInfo.travelCardNum.value;
    console.log("updated number", this.updatedTravelCardNum)
    this.updatedTravelCardSocial = formInfo.travelCardSocial.value;
    console.log("updated social", this.updatedTravelCardSocial)
    this.updatedTravelPlan = formInfo.travelPlan.value;
    console.log("updated plan", this.updatedTravelPlan)
    this.sendUpdatesToApi(id)
    this.show = true;
  }

  sendUpdatesToApi(id){
    this.updatedTravelCard = {
      travelCardNum: this.updatedTravelCardNum,
      travelCardSocial: this.updatedTravelCardSocial,
      travelPlan: this.updatedTravelPlan
    }
    console.log("updated all: ", this.updatedTravelCard)
    this.myTravelcardService.updateTravelCard(id,this.updatedTravelCard)
    .toPromise()
    .then(res => {
      this.myRouter.navigate(['/travelcards'])
    })
    .catch(err => {
      console.log("Error update", err)
    })

}

deleteTravelCard(){
  if(!confirm("Are you sure?")){
    return;
  }
  this.myTravelcardService.deleteTravelCard(this.travelcard._id)
  .then(res => {
    this.myRouter.navigate(['/travelcards'])
  })
  .catch (err => {
    console.log("delete error", err)
  })
}
}