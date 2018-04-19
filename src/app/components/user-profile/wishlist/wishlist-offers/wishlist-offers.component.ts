import { Component, OnInit} from '@angular/core';
import { WishlistService } from '../../../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-offers',
  templateUrl: './wishlist-offers.component.html',
  styleUrls: ['./wishlist-offers.component.css'],
  providers:[WishlistService]
})
export class WishlistOffersComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }

  priceAfterDiscount: any;

  ngOnInit() {
  	this.getWishlist();
  }
  public wishlistOffers=[];

  i=1;

  productPrice(offerOriginalPrice,offerDiscount){
  	this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }
  getWishlist() {
    this.wishlistService.getWishlist().subscribe((res) =>{
      console.log("calling get "+this.i);
      this.i=1+this.i;
      this.wishlistOffers = res;
      }, (error) =>{
      })
  }
  deleteOffer(offerId,userId){
    this.wishlistService.deleteRestaurant(offerId,userId).subscribe((res) =>{
    	console.log("calling get after delete");
    	this.getWishlist();
      }, (error) =>{
        alert(error + "deleting restaurant does not works");
      })
  }
}
