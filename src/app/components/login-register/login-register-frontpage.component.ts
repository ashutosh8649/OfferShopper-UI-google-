import { Component, OnInit,Inject } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import {loginDetails} from './loginDetails';
import {registerDetails} from './registerDetails';
import {LoginService} from '../../services/login.service';
import {RegisterService} from '../../services/register.service';
import {vendorDetails} from './vendorDetails';

@Component({
  selector: 'app-login-register-frontpage',
  templateUrl: './login-register-frontpage.component.html',
  styleUrls: ['./login-register-frontpage.component.css'],
  providers:[LoginService,
  			RegisterService]
})
export class LoginRegisterFrontpageComponent implements OnInit {

registerUsername:String;
registerPassword:String;
registerAddress:String;
registerCity:String;
registerState:String;
registerZip:number;
loginDetails:loginDetails;
  loginForm:FormGroup;
   addressProxy:FormGroup;
   registerForm:FormGroup;
    fb: FormBuilder;
     vendorDetails:vendorDetails;
  form:FormGroup;

  constructor(
  @Inject(FormBuilder)  fb: FormBuilder,
  private loginService:LoginService,
  private registerService:RegisterService
    ) { 
    this.fb=fb;
    this.registerForm=this.fb.group({
           username: ['',[Validators.required, Validators.email]],
            password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
            rePassword: ['',[Validators.required]]
        },{validator: this.checkIfMatchingPasswords});
  }

  ngOnInit() {
  	 this.loginForm=new FormGroup({
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
       });
  	     this.form=new FormGroup({
      firstName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      lastName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('',Validators.required),
        contact : new FormControl('', [Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(11)]),
        DOB : new FormControl(''),
        gender : new FormControl(''),
        address : new FormControl(''),
        city : new FormControl('',Validators.pattern('[a-zA-Z][a-zA-Z]+')),
        state : new FormControl('',Validators.pattern('[a-zA-Z][a-zA-Z]+')),
        zip : new FormControl('', [Validators.pattern('[0-9]*')]),
        vendorAddress : new FormControl('', [Validators.required]),
        vendorCity : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        vendorState : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        vendorZip : new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
        vendorContact : new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(11)])
    });
        
  }
  
  login(){
		let username=this.loginForm.get('username').value;	
		let	password = this.loginForm.get('password').value;
		var xorKey = 129; 
    	var result = "";
    	for (let i = 0; i < password.length; i++) {
        result += String.fromCharCode(xorKey ^ password.charCodeAt(i));
    }

  	this.loginService.loginWithEmailId(username,result).subscribe((res) =>{
  		alert("Login Successfull");	
      }, (error) =>{
      	console.log("error in login");
  });
  }

//password match validator
 checkIfMatchingPasswords(group: FormGroup) {
     let passwordField= group.controls.password,
     confirmPasswordField = group.controls.rePassword;
     if(passwordField.value !== confirmPasswordField.value ) {
         return confirmPasswordField.setErrors({notEquivalent: true})
     }else {
         return confirmPasswordField.setErrors(null);
     }
 }

AddUser(){
  console.log(this.form.value);
      let body={
                    "address": {
                                    "city": "string",
                                    "state": "string",
                                    "street": "string",
                                    "zipCode": 0
                               },
                    "dob": "string",
                    "email": "sasasastring",
                    "firstName": "string",
                    "gender":    "string",
                    "lastName":  "string",
                    "mobileNo":  "string",
                    "password":  "string",
                    "role":      "string",
                    "shopAddress": {
                                      "city": "string",
                                      "state": "string",
                                      "street": "string",
                                      "zipCode": 0
                                    },
                    "vendorMobileNo": "string"
                };


     this.registerService.register(body).subscribe((res) =>{
       console.log("resukt"+res);
      alert("Registered");  
      }, (error) =>{
        console.log("error in register");
  });

}


 IsHidden= true;
IsNotHidden=false;
onSelect(){
this.registerUsername = this.registerForm.get('username').value;
this.registerPassword = this.registerForm.get('password').value;
 

   this.form.patchValue({
   email:  this.registerUsername,
   password: this.registerPassword
});

   this.IsHidden= !this.IsHidden;
 this.IsNotHidden= !this.IsNotHidden;
}

setAddress(){
  this.registerAddress=this.form.get('address').value;
  this.registerCity=this.form.get('city').value;
  this.registerState=this.form.get('state').value;
  this.registerZip=this.form.get('zip').value;
 
   this.form.patchValue({
   vendorAddress:  this.registerAddress,
   vendorCity: this.registerCity,
    vendorState:  this.registerState,
   vendorZip: this.registerZip
});
};

  }

// ^                 # start-of-string
// (?=.*[0-9])       # a digit must occur at least once
// (?=.*[a-z])       # a lower case letter must occur at least once
// (?=.*[A-Z])       # an upper case letter must occur at least once
// (?=.*[@#$%^&+=])  # a special character must occur at least once
// (?=\S+$)          # no whitespace allowed in the entire string
// .{8,}             # anything, at least eight places though
// $                 # end-of-string
