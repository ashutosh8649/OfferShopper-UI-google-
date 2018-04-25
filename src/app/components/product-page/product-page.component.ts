import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './../../services/product-detail.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers:[ProductDetailService]
})

export class ProductPageComponent implements OnInit {

  vendorId:string;
  offerId: string;

 @Output() success = new EventEmitter<any>();
    public searchedProduct: string;
    public productName : string;
     public productDescription : string;
     public productValidity :string;
     public offer :any;
     public productOriginalPrice: string;
     public productSeller: string;
     public productDiscount: string;

  constructor(
    private productDetailService : ProductDetailService,
    private route: ActivatedRoute
    ) { }

 ngOnInit() {
   debugger
   this.vendorId=this.route.snapshot.params.id;
   this.offerId=this.route.snapshot.params.offerId; 
   
   if(this.vendorId && this.offerId) {
    this.getOfferById();
   }
   else {
    this.searchProduct();
   }
   
 }

 // Function to get customer name and make service call to get customer name from app
  searchProduct(){
      this.productDetailService.searchProduct(this.vendorId)
      .subscribe((res) =>{
        this.offer=res[0];
      this.productName=res[0].offerTitle;
      this.productDescription=res[0].offerDescription;
      this.productValidity=res[0].offerValidity;
       },(error) =>{

      });
  }

  getOfferById() {
    this.productDetailService.getOfferById(this.offerId)
      .subscribe((res) =>{
        this.offer=res;
        console.log(res);
      this.productName=res.offerTitle;
      this.productDescription=res.offerDescription;
      this.productValidity=res.offerValidity;
      this.productSeller=res.userId;
      this.productOriginalPrice=res.originalPrice;
      this.productDiscount=res.discount;
       },(error) =>{

      });
  }
}