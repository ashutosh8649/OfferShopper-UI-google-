import { Component, OnInit,Inject } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import {loginDetails} from './loginDetails';
import {registerDetails} from './registerDetails';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login-register-frontpage',
  templateUrl: './login-register-frontpage.component.html',
  styleUrls: ['./login-register-frontpage.component.css']
})
export class LoginRegisterFrontpageComponent implements OnInit {

loginDetails:loginDetails;
  loginForm:FormGroup;
   registerForm:FormGroup;
    fb: FormBuilder;
  constructor(
  @Inject(FormBuilder)  fb: FormBuilder,
  private loginService:LoginService
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

  	 /* this.registerForm=new FormGroup({
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      rePassword : new FormControl('', [Validators.required])
       },{
         Validators: this.checkIfMatchingPasswords,
         });*/


  }

//password match validator
 checkIfMatchingPasswords(group: FormGroup) {
   debugger
     let passwordField= group.controls.password,
     confirmPasswordField = group.controls.rePassword;
     if(passwordField.value !== confirmPasswordField.value ) {
         return confirmPasswordField.setErrors({notEquivalent: true})
     }else {
         return confirmPasswordField.setErrors(null);
     }
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
