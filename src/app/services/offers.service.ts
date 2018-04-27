import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Offerslist } from './../configs/offers.config';

@Injectable()
export class OffersService {
  private header;

  const options;

  constructor(private http: Http) {
    this.header = new Headers();
    // this.header.append('Content-Type', 'application/json');
    this.header.append('Authorization','String');
    this.option = new RequestOptions({headers: this.header});
   }

  getOffers(vendorId:string) {
    return this.http.get(Offerslist.getOfferlistUrl+vendorId+"/offers",this.options)
    .map(data => data.json(),
      (error: any)=>console.log("error in getting data from database"));
  }

  getAddress(street,city,state,zip){
    return this.http.get(Offerslist.getAddressUrl+street+city+state+zip+"&key="+"AIzaSyBeSuJbAPirjvZ0mEDxd-g05P5_f6gkAlQ")
    .map(data => data.json(),
      (error: any)=>console.log("error in getting data from database"));
  }

  addToCarrybag(offer){
    return this.http.post(Offerslist.postCarrybagUrl, offer, this.options)
     .map(data => data.status,
   (error: any)=>console.log("error in adding restaurant"));
  }


}
