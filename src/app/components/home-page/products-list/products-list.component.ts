import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [SearchService]
})
export class ProductsListComponent implements OnInit {

  public offers : any;
  public priceAfterDiscount: any;

  constructor(private searchService : SearchService) { }

  ngOnInit() {
    this.loadOffers();
  }

  productPrice(offerOriginalPrice,offerDiscount){
<<<<<<< HEAD

    this.priceAfterDiscount =((offerOriginalPrice)*(1-(offerDiscount)/100)).toFixed(2);
=======
    this.priceAfterDiscount = Number((offerOriginalPrice)*(1-(offerDiscount)/100)).toFixed(2);
>>>>>>> 8663ff112254b1410253d13fbd66791acff525b1
  }

  loadOffers(){
    this.searchService.searchProductsCategoryOnly("clothing")
    .subscribe((res) =>{
      this.offers=res;
      console.log("homepage");
      console.log(res);
     },(error) =>{
    });
  }
}
