import { Component, OnInit } from '@angular/core';
import { CarrybagService } from '../../../services/carrybag.service';
import { AuthorizationService } from '../../../services/authorization.service';


@Component({
  selector: 'app-carrybag',
  templateUrl: './carrybag.component.html',
  styleUrls: ['./carrybag.component.css'],
  providers:[CarrybagService,AuthorizationService]

})
export class CarrybagComponent implements OnInit {

  constructor(private carrybagService: CarrybagService,
  private authorizationService: AuthorizationService) { }
  priceAfterDiscount: any;
  public userInfo;
  public userId;
  public carryBagOffers=[];

  ngOnInit()
  {
  	this.getUserId();
  }

  getUserId() {
    this.authorizationService.getUserId().subscribe((res) =>{
      this.userInfo = res.text().split(',');
      this.userId = this.userInfo[2];
      this.getCarrybag(this.userId);
    }, (error) =>{
    })
  }

  productPrice(offerOriginalPrice,offerDiscount){
  	this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }




  getCarrybag(userId) {
    this.carrybagService.getCarrybaglist(userId).subscribe((res) =>{
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
