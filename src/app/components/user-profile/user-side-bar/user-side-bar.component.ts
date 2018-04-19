import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{UserService} from './../../../services/user.service';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {

  @Output() success = new EventEmitter<any>();

  data:any;
  
  constructor(private userdata:UserService) { }

  ngOnInit() {
  }
  
  getUserdata(){
    this.userdata.getProfile().subscribe((res) =>{
      console.log(res);
   this.data = res;
   }, (error) =>{
   })
  }

  showProfile(user) {
      this.success.emit(user);
  }
}
