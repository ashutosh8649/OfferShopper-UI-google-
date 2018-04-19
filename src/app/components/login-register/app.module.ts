import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginRegisterFrontpageComponent } from './login-register-frontpage/login-register-frontpage.component';
import { VendorRegistrationDetailsComponent } from './vendor-registration-details/vendor-registration-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterFrontpageComponent,
    VendorRegistrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
