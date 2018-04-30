import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../../services/authorization.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{Location} from '@angular/common';

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
	private active;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authorizationService: AuthorizationService,
		private location:Location
		) { 
		console.log(this.router.url);

		console.log(location.prepareExternalUrl(location.path()));
	}


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
