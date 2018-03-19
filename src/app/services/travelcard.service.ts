import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class TravelcardService {

  constructor(private myHttp: Http) { }

  getAllTravelCards(){
    return this.myHttp.get(`${environment.apiBase}/api/travelcards`,
  { withCredentials: true})
  .map(res => res.json())
  }

  getId(id){
    return this.myHttp.get(`${environment.apiBase}/api/travelcards/${id}`,
      { withCredentials: true })
      .toPromise()
      .then(res => res.json())
  }



  createNewTravelCard(travelCardData){
    return this.myHttp
    .post(`${environment.apiBase}/api/travelcards/new`, travelCardData,
    { withCredentials: true })
    .toPromise()
    .then(res => res.json());
  }

}
