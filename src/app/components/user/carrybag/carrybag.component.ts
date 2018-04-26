import { Component, OnInit,ViewChild } from '@angular/core';
import { CarrybagService } from '../../../services/carrybag.service';


@Component({
  selector: 'app-carrybag',
  templateUrl: './carrybag.component.html',
  styleUrls: ['./carrybag.component.css'],
  providers:[CarrybagService]

})
export class CarrybagComponent implements OnInit {
  @ViewChild('myModal')myModal;
  couponId:any;
  userId:String="megha@gmail.com"
  currentUserId:String;
  currentOfferId:String;
  offerId:String;
  rating:number;
  feedback:String;
  obj={};
  data:any;
  flag:boolean;
  nothing:number;

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
    this.carrybagService.getCarrybaglist(this.userId).subscribe((res) =>{
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


  couponGenerate(userId,offerId){
    alert(userId+offerId);
    this.carrybagService.validateCoupon(userId,offerId).subscribe((res) =>{
      let data=res;
      alert(data.couponId);
      if(data.userId==null){
      let user=this.carryBagOffers.find(ele=>ele.offerId===offerId);
      this.couponId=Math.floor(Math.random()*100000);
      //alert(this.data);
      this.obj={
                  "couponId" :this.couponId,
                  "userId"  :user.userId,
                  "offerId" :user.offerId,
                  "vendorValidationFlag" : true,
                  "rating" :0,
                  "feedback" :null
                } 
                this.carrybagService.newCouponGenerate(this.obj).subscribe((res) =>{
  
                }, (error) =>{
          
                })
              }
              else{
                this.couponId=data.couponId;
              }
    }, (error) =>{console.log("error");
      })




          }

  addfeedback() {

    this.carrybagService.validateCoupon(this.currentUserId,this.currentOfferId).subscribe((res) =>{
      
      let data=res;
      
      if(data.feedback==null){
        let user=this.carryBagOffers.find(ele=>ele.offerId===this.currentOfferId);
        this.obj={
          "couponId" :data.couponId ,
          "userId"  :data.userId,
          "offerId" :data.offerId,
          "vendorValidationFlag" : true,
          "rating" :this.rating,
          "feedback" :this.feedback
        } 
        this.carrybagService.updateFeedback(this.obj).subscribe((res) =>{
    
        }, (error) =>{
    
        })
              this.rating=undefined;
              this.feedback=undefined;
      
      
      }
      else {
        alert("feedback already done");
      }

    }, (error) =>{console.log("error");
      })

  } 
  
  checkFeedbackExistence(offerId, userId) {
    this.currentOfferId=offerId;
    this.currentUserId=userId;

    this.carrybagService.validateCoupon(userId,offerId).subscribe((res) =>{
      
alert(offerId+ userId);
      this.data=res;
      
      if(this.data.feedback==null){
        this.myModal.nativeElement.click();
        //this.flag=true;

        }  else  {
          this.flag=false;
        }
    }, (error) =>{console.log("error");
      })
     
 //console.log(this.flag);
 

  } 
}
