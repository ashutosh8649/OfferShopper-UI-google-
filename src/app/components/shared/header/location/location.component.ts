import { Component, OnInit ,Input} from '@angular/core';
import { LocationService } from '../../../../services/location.service';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../../../configs/language.config';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
   providers:[LocationService]
})
export class LocationComponent implements OnInit {

languages = Language.languages;

constructor(private locationService: LocationService, public translate: TranslateService) {
  
  //translation 
  translate.addLangs(this.languages);
  translate.setDefaultLang('en');

  const browserLang = translate.getBrowserLang();
  translate.use(this.languages.filter(languages => browserLang.match(languages)) ? browserLang : 'en');
}



@Input() obj={a:"Delhi"};
getlocation(){
var varobj=this.obj;
let locationService=this.locationService;
if (!navigator.geolocation){
  return;
}  
function error() {
   console.log("error");
}  
function get(varobj){
    navigator.geolocation.getCurrentPosition((position)=>{
    var Latitude  = position.coords.latitude;
    var Longitude = position.coords.longitude;

    locationService.getLocation(position.coords.latitude, position.coords.longitude).subscribe((res) =>{

         console.log(res.results[0].formatted_address);
         var result = res.results[0].formatted_address.toString().split(",");
         var a = result.length;
         console.log(result[a-3]);
         if(result[a-3].trim()=="Gurugram".trim())
           varobj.a="Gurgaon";
         else
           varobj.a=result[a-3];
         console.log(Latitude+" "+Longitude+" "+varobj.a);
         localStorage.setItem("loc",varobj.a);


   }, (error) =>{ console.log("error")    
   })

}, error);
 }
//function call to callback
get(varobj);

}


 ngOnInit(){
    var value:String=localStorage.getItem("loc");
      if(value){
        if(value.trim()=="Gurugram".trim())
          this.obj.a="Gurgaon";
        else
           this.obj.a=value.trim();
      }
      else
        this.getlocation();

 }



}

