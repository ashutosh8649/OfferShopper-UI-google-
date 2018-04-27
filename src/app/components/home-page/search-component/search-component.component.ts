import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  providers: [SearchService]
})

export class SearchComponentComponent implements OnInit {

  public results:any=[];

  flag :boolean;
  searchTerm$ = new Subject<string>();

  category : string = "";
  query : string = "";

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
}