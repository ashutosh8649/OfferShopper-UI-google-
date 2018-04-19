import { Component, OnInit } from '@angular/core';
import { CarrybagService } from '../../../../services/carrybag.service';


@Component({
  selector: 'app-carrybag-offer',
  templateUrl: './carrybag-offer.component.html',
  styleUrls: ['./carrybag-offer.component.css'],
  providers:[CarrybagService]

})
export class CarrybagOfferComponent implements OnInit {

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
    console.log("1st");
    this.carrybagService.getCarrybaglist().subscribe((res) =>{
      console.log("calling get ");
      this.carryBagOffers = res;
      // if(!this.carryBagOffers.length)
      // {
      //   $('#overlay').modal('show');
      //   setTimeout(function()
      //   {
      //     $('#overlay').modal('hide');
      //   }, 5000);
      // }
    }, (error) =>{console.log("error");
      })
  }
  deleteOffer(offerId){
    this.carrybagService.deleteCarrybag(offerId).subscribe((res) =>{
    	console.log("calling get after delete");
    	this.getCarrybag();
      }, (error) =>{
        alert(error + "deleting restaurant does not works");
      })
  }

}
