import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/header/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchComponentComponent } from './components/home-page/search-component/search-component.component';
import { ProductsHeaderComponent } from './components/home-page/products-header/products-header.component';
import { ProductsListComponent } from './components/home-page/products-list/products-list.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { SearchSideBarComponent } from './components/shop-page/search-side-bar/search-side-bar.component';
import { SearchResultsComponent } from './components/shop-page/search-results/search-results.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserComponent } from './components/user/user.component';
import { CarrybagComponent } from './components/user/carrybag/carrybag.component';
import { WishlistComponent } from './components/user/wishlist/wishlist.component';
import { UserdetailsComponent } from './components/user/userdetails/userdetails.component';
import { LocationComponent } from './components/shared/header/location/location.component';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { WishlistService } from './services/wishlist.service';
import { CarrybagService } from './services/carrybag.service';
import { LoginRegisterFrontpageComponent } from './components/login-register/login-register-frontpage.component';


const appRoutes:Routes=[
  {path:'user/:param',component:UserComponent},
  {path:'login',component:LoginRegisterFrontpageComponent}
  //{path:'',redirectTo:'/sidebar' ,pathMatch:'full'},
  //{path:'**',redirectTo:'/sidebar' ,pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SearchComponentComponent,
    ProductsHeaderComponent,
    ProductsListComponent,
    ShopPageComponent,
    SearchSideBarComponent,
    SearchResultsComponent,
    ContactUsComponent,
    UserComponent,
    LocationComponent,
    CarrybagComponent,
    UserdetailsComponent,
    WishlistComponent,
    LoginRegisterFrontpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, WishlistService, CarrybagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
