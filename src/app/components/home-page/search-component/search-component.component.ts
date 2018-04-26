import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  providers: [SearchService]
})

export class SearchComponentComponent implements OnInit {

  //event created to pass category and query to parent class
  @Output() success = new EventEmitter<any>();

  //true if search has been done
  searchFlag : boolean = false;
  //true if results were found
  resultsFlag : boolean = false;

  public results:any=[];
  public products:any=[];
  name:String;

  val = new Subject<string>();
  flag :boolean;
  searchTerm$ = new Subject<string>();

  category : string;
  query : string;

  constructor(private searchService: SearchService) {
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
    this.category = 'All';
  }

  showValue() : void {
    //no results shown
    this.searchFlag = true;
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

}