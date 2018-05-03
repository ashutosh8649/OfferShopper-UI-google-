import { Component, OnInit } from '@angular/core';
import { Cities}  from '../../../configs/cities.config'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

	constructor() { }
    cities = Cities.citiesName; 

    selected={a:"Delhi"};
    tempselected={a:"Gurgaon"}

    fav(tempselected){
    this.selected.a=tempselected.a;
    }
    
	ngOnInit() {

		  this.cities.sort(function(a,b){
          return a.localeCompare(b);
       });
	}
}
