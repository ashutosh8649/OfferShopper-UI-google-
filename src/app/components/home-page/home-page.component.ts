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

  token:any;
  ngOnInit() {
  }

  public results : any;

  setCategoryAndQuery(event) : void {
    this.results = event;
  }
}
