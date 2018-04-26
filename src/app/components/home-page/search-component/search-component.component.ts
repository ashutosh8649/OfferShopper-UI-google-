import { Component, OnInit, Output, EventEmitter,ViewContainerRef } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Subject } from 'rxjs/Subject';
import { AuthorizationService } from '../../../services/authorization.service';
import { MessageService } from '../../../services/message.service';
import { CarrybagService } from '../../../services/carrybag.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  providers: [SearchService,MessageService,AuthorizationService]
})

export class SearchComponentComponent implements OnInit {

  //event created to pass category and query to parent class
  @Output() success = new EventEmitter<any>();

  public results:any=[];
  public products:any=[];
  name:String;

  val = new Subject<string>();
  flag :boolean;
  searchTerm$ = new Subject<string>();

  category : string;
  query : string;

  public userInfo : any;
  public user : any;

  constructor(private searchService: SearchService,
      private authorizationService: AuthorizationService,
    private messageService:MessageService,
    private _vcr:ViewContainerRef,
    private carrybagService: CarrybagService,) {
    //searching the keyword in redis database
    if(this.searchTerm$){
    this.searchService.search(this.searchTerm$)
      .subscribe(res => {
        this.results = res;
        if(res!="default")
        {
          this.flag=true;
       }
        else{
          this.flag=false;
        }
      });
    }
}

  ngOnInit() {
    this.getUserId();
    this.category = 'All';
  }

  showValue() : void {
    //no results shown
  if(this.category=="All" && this.query == null) {
    alert("Please select a category or search for a deal.");
  }

  // category based search
  else if(this.category == "All" && this.query != null) {
    this.searchService.searchProducts(this.query)
    .subscribe(res => {
      this.products = res;
    });
    this.flag=false;
     }  

  else if(this.category != "All" && this.query == null) {
    this.searchService.searchProductsCategoryOnly(this.category)
    .subscribe(res => {
      this.products = res;
    });
    this.flag=false;
  }
  //search by both category and key
  else {
    this.searchService.searchProductsCategoryAndKey(this.category, this.query)
    .subscribe(res => {
      this.products = res;
    });
    this.flag=false;
  }
  }

  //searching the products in backend
  onclick(result) {
    this.query=result;
    this.searchService.searchProducts(result)
    .subscribe(res => {
      this.products = res;
    });
    this.flag=false;
  }

  //sorting 
  sorters = {
    byPrice: function(firstProduct, secondProduct) {
      return firstProduct.originalPrice - secondProduct.originalPrice;
    },
    byDiscount: function(firstProduct, secondProduct) {
      return firstProduct.discount - secondProduct.discount;
    }
  };

  //function for chosing on which basis to sort from
  sortBy(x) {
    switch (x) {
      case "priceLH":
        this.products.sort(this.sorters.byPrice);
        break;

      case "priceHL":
        this.products.sort(this.sorters.byPrice);
        this.products.reverse();
        break;

      case "discountLH":
        this.products.sort(this.sorters.byDiscount);
        break;

      case "discountHL":
        this.products.sort(this.sorters.byDiscount);
        this.products.reverse();
        break;
    }
  }

  getUserId() {
   this.authorizationService.getUserId().subscribe((res) =>{
     this.userInfo = res.text().split(',');
     this.user = this.userInfo[2];
     console.log(res.text());
   }, (error) =>{
   })
 }

   addToCarrybag(offer1) {
     console.log(offer1);

     console.log(this.user);
   let carrybagBean = {
     "userId":this.user,
     "offerId":offer1._id,
     "offerTitle":offer1.offerTitle,
     "offerOriginalPrice":offer1.originalPrice,
     "offerDiscount":offer1.discount,
     "offerImage":"abcd",
     "offerValidity":offer1.offerValidity,
     "vendorId":offer1.userId
   }

   this.carrybagService.addToCarrybag(carrybagBean).subscribe((res) =>{
     this.messageService.showSuccessToast(this._vcr,"Added");
   },(error) =>{

   })
 }

}