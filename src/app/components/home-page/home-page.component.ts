import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SearchService, OffersService]
})
export class HomePageComponent implements OnInit {

  constructor(public offersService : OffersService) {}

  token:any;
  ngOnInit() {
    this.loadOffers()
  }

  public results : any;
  public offers : any;

  setCategoryAndQuery(event) : void {
    this.results = event;
  }

  loadOffers(){
      this.offersService.getOffers("pooja@gmail.com")
      .subscribe((res) =>{
        this.offers=res;
        console.log(this.offers);
       },(error) =>{
      });
  }
}
