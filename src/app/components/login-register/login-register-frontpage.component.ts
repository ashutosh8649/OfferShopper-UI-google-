import { Component, OnInit,Inject } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {loginDetails} from './loginDetails';
import {registerDetails} from './registerDetails';
import {LoginService} from '../../services/login.service';
import {RegisterService} from '../../services/register.service';
import {vendorDetails} from './vendorDetails';

@Component({
  selector: 'app-login-register-frontpage',
  templateUrl: './login-register-frontpage.component.html',
  styleUrls: ['./login-register-frontpage.component.css'],
  providers:[ RegisterService ]
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
  tempPassword:String;
  isAlredyExist:boolean=false;
  status: boolean = false;
  private userLocation: string = "Delhi";

  constructor(
    @Inject(FormBuilder)  fb: FormBuilder,
    private loginService:LoginService,
    private registerService:RegisterService,
    private router:Router
    ) {
    this.fb=fb;
    this.registerForm=this.fb.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      rePassword: ['',[Validators.required]]
    },{validator: this.checkIfMatchingPasswords});
    this.onChanges();
  }

  ngOnInit() {
    this.loginForm=new FormGroup({
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
    });
    this.userLocation = localStorage.getItem("loc");
  }

  onChanges(): void {
    this.registerForm.get('username').valueChanges.subscribe(val => {
      this.isAlredyExist=false;
    });
  }

  validateUsername(){
    let body= {
      "email": this.registerForm.get('username').value
    };
    this.registerService.register(body).subscribe((res) => {
    },
    (res:Response) => {
      if(res.status==409) {
        this.isAlredyExist=true;
      }
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
      console.log("Login component success");
      this.router.navigate(['/homepage',this.userLocation]);
    }, (res:Response) =>{
      if(res.status==401){
        alert("Unauthorized User");
      }
      else if(res.status==500){
        alert("Internal server error");
      }
      else if(res.status==201){
        alert("Successfully logged in");
      }
      else if(res.status==404){
        alert("Service Not Found");
      }
      else if(res.status==403){
        alert("403 Forbidden");
      }
      else{
        alert("Connection error");
      }
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

registerUser(){
  let tempPassword="";

  tempPassword=this.registerForm.get('password').value;
  var xorKey = 129;
  var resultPassword = "";

  for (let i = 0; i < tempPassword.length; i++) {
    resultPassword += String.fromCharCode(xorKey ^ tempPassword.charCodeAt(i));
  }

  let body={
    "email": this.registerForm.get('username').value,
    "password":  resultPassword,
    "role":      "Customer"
  };

  this.registerService.register(body).subscribe((res) =>{
      alert("Link sent to your account for verification");
      console.log(res);
this.registerForm.reset();
  }, (res:Response) =>{
    console.log("In Error");
    console.log(res);
    if(res.status==401 || res.status==409){
      alert("Username already exists");
    }
    else if(res.status==500){
      alert("Internal server error");
    }
    else if(res.status==201){
      alert("Successfully registered");
    }
    else if(res.status==404){
      alert("Service Not Found");
    }
    else if(res.status==403){
      alert("403 Forbidden");
    }
    else{
      alert("Connection error");

    }
  });

}

}

// ^                 # start-of-string
// (?=.*[0-9])       # a digit must occur at least once
// (?=.*[a-z])       # a lower case letter must occur at least once
// (?=.*[A-Z])       # an upper case letter must occur at least once
// (?=.*[@#$%^&+=])  # a special character must occur at least once
// (?=\S+$)          # no whitespace allowed in the entire string
// .{8,}             # anything, at least eight places though
// $                 # end-of-string
