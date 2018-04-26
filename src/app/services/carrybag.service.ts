import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Carrybag} from './../configs/carrybag.config';

@Injectable()
export class CarrybagService {

  private userInfo;

  constructor(
    private http: Http
) { }


  private headers = new Headers({ 'Content-Type': 'application/json'});

  getCarrybaglist(){
    return this.http.get(Carrybag.getCarryBagUrl)
    .map(data => data.json(),
    (error: any)=>console.log("error in getting data from database"));

  }

  deleteCarrybag(offerId) {
  	return this.http.delete(Carrybag.deleteCarryBagUrl+offerId, { headers: this.headers })
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }

  addToCarrybag(offer){
    return this.http.post(Carrybag.postCarrybagUrl, offer, {headers: this.headers})
     .map(data => data.status,
   (error: any)=>console.log("error in adding restaurant"));
  }
}
