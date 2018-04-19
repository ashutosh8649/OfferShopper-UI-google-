import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/header/navbar/navbar.component';
import { CarryBagComponent } from './components/shared/header/navbar/carry-bag/carry-bag.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchComponentComponent } from './components/home-page/search-component/search-component.component';
import { ProductsHeaderComponent } from './components/home-page/products-header/products-header.component';
import { ProductsListComponent } from './components/home-page/products-list/products-list.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { SearchSideBarComponent } from './components/shop-page/search-side-bar/search-side-bar.component';
import { SearchResultsComponent } from './components/shop-page/search-results/search-results.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSideBarComponent } from './components/user-profile/user-side-bar/user-side-bar.component';
import { UserContentComponent } from './components/user-profile/user-content/user-content.component';
import { CarrybagOfferComponent } from './components/user-profile/carrybag/carrybag-offer/carrybag-offer.component';
import { CarrybagHeaderComponent } from './components/user-profile/carrybag/carrybag-header/carrybag-header.component';
import { WishlistOffersComponent } from './components/user-profile/wishlist/wishlist-offers/wishlist-offers.component';
import { WishlistHeaderComponent } from './components/user-profile/wishlist/wishlist-header/wishlist-header.component';
import { UserdetailsComponent } from './components/user-profile/userdetails/userdetails.component';
import { LocationComponent } from './components/shared/header/location/location.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { WishlistService } from './services/wishlist.service';
import { CarrybagService } from './services/carrybag.service';


const appRoutes:Routes=[
  {path:'userprofile',component:UserProfileComponent}
  //{path:'',redirectTo:'/sidebar' ,pathMatch:'full'},
  //{path:'**',redirectTo:'/sidebar' ,pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    NavbarComponent,
    CarryBagComponent,
    FooterComponent,
    HomePageComponent,
    SearchComponentComponent,
    ProductsHeaderComponent,
    ProductsListComponent,
    ShopPageComponent,
    SearchSideBarComponent,
    SearchResultsComponent,
    ContactUsComponent,
    UserProfileComponent,
    UserSideBarComponent,
    UserContentComponent,
    LocationComponent,
    CarrybagOfferComponent,
    CarrybagHeaderComponent,
    UserdetailsComponent,
    WishlistOffersComponent,
    WishlistHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, WishlistService, CarrybagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
