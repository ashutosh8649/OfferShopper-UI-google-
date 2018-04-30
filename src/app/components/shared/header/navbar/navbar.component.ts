import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
	providers:[ AuthorizationService ]
})
export class NavbarComponent implements OnInit {

	private login:boolean = false;
	private token:any;
	private userId: string;
	private user: string;

	constructor(
		private router: Router,
		private authorizationService: AuthorizationService
		) { }


	ngOnInit() {
		this.isLogin();
	}

	isLogin(){
		this.login = this.authorizationService.isLogin();
		this.getUserId();
	}

	logout(){
		this.authorizationService.logout();
    this.isLogin();
	}

	getUserId() {
		this.authorizationService.getUserId().subscribe((res:any) =>{
			this.userId = (res.text().split(','))[2];
			this.user = (this.userId.split('@'))[0];
			console.log(this.user);
		}, (error) =>{
		})
	}

}
