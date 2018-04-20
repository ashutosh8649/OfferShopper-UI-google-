import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

 import {vendorDetails} from './vendorDetails';

@Component({
  selector: 'app-vendor-registration-details',
  templateUrl: './vendor-registration-details.component.html',
  styleUrls: ['./vendor-registration-details.component.css']
})
export class VendorRegistrationDetailsComponent implements OnInit {

 vendorDetails:vendorDetails;
  form:FormGroup;

  constructor() { }

  ngOnInit() {
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
        vendorContact : new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(11)]),
    })
  }

Add(){
  console.log(this.form.value);
}

}
