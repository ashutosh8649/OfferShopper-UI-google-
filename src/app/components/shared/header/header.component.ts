import { Component, OnInit } from '@angular/core';
import { Cities}  from '../../../configs/cities.config';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from "@angular/router";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class HeaderComponent implements OnInit {

  private location: string;
  private mainUrl: string;

	constructor(
    location: Location,
    private router: Router
    ) { }

    cities = Cities.citiesName; 

    selected={a:"Delhi"};
    tempselected={a:"Gurgaon"}

    fav(tempselected){
    this.selected.a=tempselected.a;
    let value = tempselected.a;
    localStorage.setItem("loc",tempselected.a);
    this.location = location.pathname;
    this.mainUrl = (this.location.split('/'))[1];
    if(this.mainUrl=="homepage")
      this.router.navigate(['/',this.mainUrl,tempselected.a]);
    }
    
	ngOnInit() {

		  this.cities.sort(function(a,b){
          return a.localeCompare(b);
       });
	}

  getLocation(event) {
    console.log(event);
    this.location = event;
  }
}
