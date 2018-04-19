import { Component, OnInit, Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit,OnChanges {

@Input() restaurant: any;
restaurants:string;

  constructor() { }

  ngOnInit() {
  }

  showProfile(user) {
  	this.restaurants=user;
  }
  
  ngOnChanges(changes: SimpleChanges)  {
  	this.restaurants = changes.restaurant.currentValue;
  }


}
