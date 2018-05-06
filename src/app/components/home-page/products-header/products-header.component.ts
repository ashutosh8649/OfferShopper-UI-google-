import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../../services/offers.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {

  public offers : any;
  public priceAfterDiscount: any;

  constructor(private offersService : OffersService ) { }

  ngOnInit() {
    this.loadOffers();
  }

  productPrice(offerOriginalPrice,offerDiscount){
    this.priceAfterDiscount = Number((offerOriginalPrice)*(1-(offerDiscount)/100)).toFixed(2);
  }

  //loads offers according to location.. currently location is hardcoded
  loadOffers(){
    this.offersService.getOffersByLocation("Ahmedabad")
    .subscribe((res) =>{
      this.offers=res;
      console.log("homepage");
      console.log(res);
     },(error) =>{
    });
  }
}
