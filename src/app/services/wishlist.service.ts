import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { Wishlist } from './../configs/wishlist.config';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class WishlistService {

  constructor(
    private http: Http,
private authorizationService: AuthorizationService
  ) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});
  getWishlist(userId){
    console.log(userId);
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
