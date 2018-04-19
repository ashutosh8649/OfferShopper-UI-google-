import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Wishlist } from './../configs/wishlist.config';

@Injectable()
export class WishlistService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  getWishlist(){
    return this.http.get(Wishlist.getWishlistUrl+"12345")
    .map(data => data.json(),
    (error: any)=>console.log("error in getting data from database"));
  }

  deleteRestaurant(offerId,userId) {  	
  	return this.http.delete(Wishlist.deleteWishlistUrl+offerId+"/"+userId, { headers: this.headers })
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }
}
