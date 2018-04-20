import { Component, OnInit } from '@angular/core';
import { CarrybagService } from '../../../services/carrybag.service';


@Component({
  selector: 'app-carrybag',
  templateUrl: './carrybag.component.html',
  styleUrls: ['./carrybag.component.css'],
  providers:[CarrybagService]

})
export class CarrybagComponent implements OnInit {

  constructor(private carrybagService: CarrybagService) { }
  priceAfterDiscount: any;

  productPrice(offerOriginalPrice,offerDiscount){
  	this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }

  ngOnInit()
  {
  	this.getCarrybag();
  }
  public carryBagOffers=[];

  getCarrybag() {
    this.carrybagService.getCarrybaglist().subscribe((res) =>{
      this.carryBagOffers = res;
    }, (error) =>{console.log("error");
      })
  }
  deleteOffer(offerId){
    this.carrybagService.deleteCarrybag(offerId).subscribe((res) =>{
    	this.getCarrybag();
      }, (error) =>{
        alert(error + "deleting restaurant does not works");
      })
  }

}
