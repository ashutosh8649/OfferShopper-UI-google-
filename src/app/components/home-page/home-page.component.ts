import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [SearchService]
})
export class HomePageComponent implements OnInit {

  constructor() {}

  date = new Date();
  token:any;

  ngOnInit() {
		let time = "T"+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds()+"Z";
    console.log("System Time:2020-09-07"+time);
    console.log("Required Time: 2018-04-24T04:34:31.660Z");
  }

  public results : any;
  public offers : any;

  getResultsFromSearch(event) : void {
    //storing searchresults
    this.results = event.products;
  }
}
