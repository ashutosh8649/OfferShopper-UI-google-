import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AddOfferConfig} from '../configs/add-offer-config';

@Injectable()
export class AddOfferService {

	  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getOffersList(){
    return this.http.get(AddOfferConfig.getURL+"megha@gmail.com/offers")
    .map(data => data.json(),
    (error: any)=>console.log("error in getting data from database"));

  }

deleteOffer(offerId) {
  	return this.http.delete(AddOfferConfig.deleteOfferURL+offerId, { headers: this.headers })
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }

  updateOffer(offerId) {
  	return this.http.put(AddOfferConfig.updateOfferURL+offerId, { headers: this.headers })
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }

  putOffer(obj){

   return this.http.put(AddOfferConfig.updateOfferURL+obj.offerId,obj, {headers: this.headers})
    .map(data => data.json(),
  (error: any)=>console.log("error"));
 }

  addNewOffer(obj){

   return this.http.post(AddOfferConfig.addOfferURL,obj, {headers: this.headers})
    .map(data => data.json(),
  (error: any)=>console.log("error"));
}

couponValidateService(coupon){
  return this.http.get(AddOfferConfig.validateCouponUrl+coupon)
  .map(data => data.json(),
  (error: any)=>console.log("error in getting data from database"));
}

changeFlag(obj) {
  return this.http.post(AddOfferConfig.couponFlagChangedUrl,obj, {headers: this.headers})
    .map(data => data.json(),
  (error: any)=>console.log("error"));
}

putOffersInCarryBag(obj){
  return this.http.put(AddOfferConfig.updateOffersInCarryBag,obj, {headers: this.headers})
  .map(data => data.json(),
(error: any)=>console.log("error"));
}


}
