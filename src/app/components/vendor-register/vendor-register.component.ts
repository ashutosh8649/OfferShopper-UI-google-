import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css'],
  providers:[ RegisterService ]
})
export class VendorRegisterComponent implements OnInit {
  fb: FormBuilder;
  form:FormGroup;

  filter = false;


  states=['Andaman and Nicobar Islands',
'Andhra Pradesh',
'Arunachal Pradesh',
'Assam',
'Bihar',
'Chandigarh',
'Chhattisgarh',
'Dadra and Nagar Haveli',
'Daman and Diu',
'Delhi',
'Goa',
'Gujarat',
'Haryana',
'Himachal Pradesh',
'Jammu and Kashmir',
'Jharkhand',
'Karnataka',
'Kerala',
'Lakshadweep',
'Madhya Pradesh',
'Maharashtra',
'Manipur',
'Meghalaya',
'Mizoram',
'Nagaland',
'Odisha',
'Puducherry',
'Punjab',
'Rajasthan',
'Sikkim',
'Tamil Nadu',
'Telangana',
'Tripura',
'Uttar Pradesh',
'Uttarakhand',
'West Bengal'];

cities=['Abdul','Adilabad','Adwani','Agartala','Agra','Ahmedabad','Ahmednagar','Aizawl','Ajabpur','Ajmer','Akividu','Akola','Alanallur','Alangulam','Alappuzha','Aldona','Alibag','Aligarh','Alipur','Alipur','Allahabad','Almora','Aluva','Alwar','Amal','Amalapuram','Ambad','Ambah','Ambala','Ambarnath','Ambejogai','Ambikapur','Ambur','Amer','Amet','Amravati','Amreli','Amritsar','Anand','Anantapur','Anantnag','Anantpur','Anchal','Andheri','Andra','Angadipuram','Angul','Ankleshwar','Annamalainagar','Antapur','Arakkonam','Arani','Aranmula','Arch','Ariyalur','Arora','Arpora','Arunachal','Arvi','Asansol','Assagao','Attingal','Attur','Aundh','Aurangabad','Aurangabad','Avanigadda','Azamgarh','Baddi','Badlapur','Bagalkot','Bagh','Bagpat','Bahadurgarh','Baharampur','Baidyabati','Bala','Balaghat','Balana','Balanagar','Balangir','Balasore','Bali','Bali','Ballabgarh','Balu','Balurghat','Bambolim','Banda','Bandra','Banga','Bangalore','Bangaon','Bank','Banka','Bankura','Banswara','Bapatla','Barakpur','Baramati','Barddhaman','Bardoli','Bareilly','Bargarh','Barmer','Barnala','Baroda','Barpali','Barpeta','Basirhat','Basti','Basu','Batala','Bawan','Bawana','Beawar','Begusarai','Behala','Bela','Belapur','Belgaum','Belgharia','Bellare','Bellary','Bemetara','Berasia','Betalbatim','Betim','Betul','Bhadath','Bhadohi','Bhadravati','Bhagalpur','Bhagwan','Bhandari','Bhandup','Bharatpur','Bharuch','Bhatapara','Bhatinda','Bhatkal','Bhavnagar','Bhawan','Bhilai','Bhilwara','Bhimavaram','Bhiwandi','Bhiwani','Bhoj','Bhongir','Bhopal','Bhubaneswar','Bhuj','Bhusawal','Bichpuri','Bidar','Bihar Sharif','Bijapur','Bikaner','Bilaspur','Bilaspur','Bilimora','Binavas','Binnaguri','Bishnupur','Bobbili','Bodhan','Bodinayakkanur','Boisar','Bokaro','Bolpur','Botad','Brahmapur','Budaun','Budbud','Budha','Bulandshahr','Bundi','Calangute','Candolim','Canning','Caranzalem','Chakan','Chakra','Chalisgaon','Chamba','Champa','Chand','Chandan','Chandannagar','Chandauli','Chandausi','Chandigarh','Chandrapur','Changanacheri','Channapatna','Charan','Charu','Chen','Chengannur','Chennai','Chetan','Cheyyar','Chhabra','Chhachhrauli','Chhota Udepur','Chicalim','Chidambaram','ChikmagalÃÂ«r','Chikodi','Chinchvad','Chintamani','Chiplun','Chirala','Chitra','Chitradurga','Chittoor','Chittur','Choolai','Chopda','Chopra','Churachandpur','Coimbatore','Colaba','Connaught Place','Coonoor','Cuddalore','Cumbum','Cuncolim','Curchorem','Cuttack','Dadri','Dahanu','Dahod','Dam Dam','Daman','Damoh','Dang','Dangi','Darbhanga','Darjeeling','Darsi','Dasna','Dasua','Davangere','Dehradun','Delhi','Deolali','Deoria','Devgarh','Devipattinam','Dewas','Dhaka','Dhamtari','Dhanbad','Dhansura','Dhar','Dharamsala','Dharapuram','Dharavi','Dhariwal','Dharmapuri','Dharwad','Dhenkanal','Dhone','Dhrol','Dhubri','Dhule','Dhuri','Dibrugarh','Dicholi','Dimapur','Dinanagar','Dindigul','Dindori','Dipas','Dogadda','Dona Paula','Dumka','Durg','Durgapur','Dwarahat','Dwarka','Edavanna','Ekkattuthangal','Ellora Caves','Eluru','Eral','Ernakulam','Erode','Etawah','Faizabad','Farakka','Faridabad','Faridkot','Fatehabad','Fatehgarh','Fatehpur','Firozabad','Firozpur','Fort','Gadag','Gampalagudem','Gandhidham','Gandhigram','Gandhinagar','Ganga','Ganganagar','Gangapur','Gangrar','Gangtok','Gannavaram','Ganpat','Gargoti','Garhshankar','Gaya','Ghana','Ghatal','Ghatkopar','Ghaziabad','Goa','Gobichettipalayam','Godhra','Gohana','Golaghat','Gold','Gonda','Gorakhpur','Goregaon','Goshaingaon','Gudivada','Gudur','Guindy','Gujrat','Gulbarga','Guna','Guntur','Gurdaspur','Gurgaon','Guruvayur','Guwahati','Gwalior','Habra','Hadadi','Haldia','Haldwani','Hamirpur','Hamirpur','Hansi','Hapur','Hari','Haridwar','Haripad','Haripur','Haryana','Hassan','Haveri','Hazaribagh','Himatnagar','Hinganghat','Hingoli','Hira','Hiriyur','Hisar','Honavar','Hong','Hoshangabad','Hoshiarpur','Hosur','Howrah','Hubli','Hugli','Hyderabad','Ichalkaranji','Idukki','Igatpuri','Iglas','Imphal','Indore','Indraprast','Irinjalakuda','Itanagar','Jabalpur','Jadabpur','Jagdalpur','Jagraon','Jaipur','Jaisalmer','Jajpur','Jalalabad','Jalalpur','Jalandhar','Jalesar','Jalgaon Jamod','Jalna','Jalpaiguri','Jamal','Jammu','Jamnagar','Jamshedpur','Janjgir','Jaspur','Jatani','Jaunpur','Jayanti','Jaynagar','Jaypur','Jha Jha','Jhajjar','Jhalawar','Jhansi','Jhargram','Jharsuguda','Jhunjhunun','Jind','Jodhpur','Jorhat','Junagadh','Kadapa','Kagal','Kailaras','Kaimganj','Kaithal','Kakdwip','Kakinada','Kaladi','Kalam','Kalamboli','Kalan','Kalinga','Kalka','Kalkaji Devi','Kalol','Kalpakkam','Kalpetta','Kalra','Kalyan','Kalyani','Kamalpur','Kamalpura','Kamat','Kanakpura','Kanchipuram','Kanchrapara','Kandi','Kangayam','Kangra','Kanhangad','Kanigiri','Kaniyambadi','Kankauli','Kanniyakumari','Kannur','Kanpur','Kapurthala Town','Karad','Karaikal','Karaikudi','Karamadai','Karamsad','Karanja','Karari','Kargil','Karimganj','Karimnagar','Karjat','Karnal','Karsiyang','Karur','Karwar','Kasal','Kasaragod','Kasganj','Kashipur','Kasia','Kataria','Kathua','Katni','Katoya','Katra','Kaul','Kavali','Kavaratti','Kayamkulam','Keshod','Khajuraho Group of Monuments','Khalapur','Khambhat','Khammam','Khan','Khanna','Kharagpur','Kharar','Khargone','Khatauli','Kheda','Khergam','Kheri','Khinwara','Khopoli','Khurda','Khurja','Kishangarh','Koch Bihar','Kochi','Kodaikanal','Kodungallur','Kohima','Kokrajhar','Kolar','Kolayat','Kolhapur','Kolkata','Kollam','Kollegal','Koni','Koni','Konnagar','Koothanallur','Koppal','Koraput','Korba','Kosamba','Kot Isa Khan','Kota','Kotian','Kottagudem','Kottakkal','Kottarakara','Kottayam','Kovilpatti','Kovvur','Kozhikode','Krishnagiri','Kulti','Kumar','Kumbakonam','Kumhari','Kundan','Kunwar','Kuppam','Kurali','Kurnool','Kushalnagar','Kuzhithurai','Ladwa','Lakhimpur','Lala','Lalgudi','Lamba Harisingh','Lanka','Latur','Liluah','Lohaghat','Lucknow','Ludhiana','Machhiwara','Machilipatnam','Madanapalle','Madgaon','Madhoganj','Madikeri','Madurai','Madurantakam','Mahabalipuram','Mahad','Mahajan','Mahal','Maharaj','Mahatma','Mahesana','Mahesh','Mahim','Mahulia','Malappuram','Maldah','Malpur','Manali','Mancherial','Mandal','Mandapeta','Mandi','Mandla','Mandsaur','Mandvi','Mandya','Mangalagiri','Mangalore','Mangaon','Manipala','Manipur','Manjeri','Manna','Mannargudi','Manor','Mansa','Manu','Markal','Markapur','Marmagao','Maru','Mashobra','Matar','Mathan','Mathura','Mattanur','Mavelikara','Mawana','Mayapur','Medak','Medarametla','Medchal','Medinipur','Meerut','Mehra','Mettur','Mhow','Mill','Miraj','Mirza Murad','Mirzapur','Mithapur','Modasa','Moga','Mohala','Mohali','Mohan','Moradabad','Morena','Morinda','Morvi','Motihari','Mount Abu','Muddanuru','Mukerian','Muktsar','Multi','Mumbai','Mundgod','Mundra','Munger','Murshidabad','Mussoorie','Muzaffarnagar','Muzaffarpur','Mylapore','Mysore','Nabadwip','Nabha','Nadgaon','Nadia','Nadiad','Nagal','Nagapattinam','Nagar','Nagara','Nagari','Nagaur','Nagercoil','Nagpur','Nagwa','Naini','Nalagarh','Nalbari','Nalgonda','Namakkal','Namrup','Nanda','Nanded','Nandi','Nandigama','Nandurbar','Nandyal','Naraina','Narasaraopet','Narayangaon','Narela','Narnaul','Narsapur','Nashik','Nathdwara','Navelim','Navsari','Nayagarh','Nazira','Nehra','Nellore','Neral','Neri','New Delhi','Neyveli','Nila','Nilambur','Nilokheri','Nizamabad','Noida','Nongpoh','Nongstoin','North Lakhimpur','Nurpur','Nuzvid','Odhan','Omalur','Ongole','Ooty','Orai','Osmanabad','Ottappalam','Pachmarhi','Padrauna','Pahalgam','Pakala','Pala','Palakkad','Palampur','Palani','Palayam','Palghar','Pali','Palladam','Paloncha','Palus','Palwal','Panchal','Panchgani','Pandharpur','Panipat','Panjim','Panruti','Pantnagar','Panvel','Paonta Sahib','Parappanangadi','Paravur','Parbhani','Parel','Parra','Patan','Patancheru','Patel','Patelguda','Pathanamthitta','Pathankot','Patiala','Patna','Pattambi','Pattukkottai','Pauri','Payyanur','Peddapuram','Pehowa','Perambalur','Peranampattu','Perundurai','Petlad','Phagwara','Phaphamau','Piduguralla','Pilani','Pileru','Pilkhuwa','Pimpri','Pitampura','Pithapuram','Pithoragarh','Pochampalli','Pollachi','Ponda','Ponnani','Ponneri','Porbandar','Port Blair','Potti','Powai','Proddatur','Puducherry','Pudukkottai','Puliyur','Punalur','Pune','Puras','Puri','Purnea','Puruliya','Pusa','Pushkar','Puttur','Puttur','Quepem','Raichur','Raigarh','Raipur','Raipur','Rajahmundry','Rajapalaiyam','Rajapur','Rajkot','Rajpur','Rajpura','Raju','Rama','Ramanagaram','Ramanathapuram','Ramapuram','Ramavaram','Ramgarh','Ramnagar','Rampur','Rana','Ranaghat','Ranchi','Rander','Raniganj','Ranippettai','Ranjan','Ratlam','Ratnagiri','Raurkela','Rawal','Raxaul','Rayagada','Rewa','Rewari','Ring','Rishikesh','Rohtak','Roorkee','Roshan','Rudrapur','Rupnagar','Rupnarayanpur','Sachin','Sagar','Sagar','Saha','Saharanpur','Sahibabad','Sakri','Sakri','Salem','Saligao','Salt Lake City','Samastipur','Sambalpur','Sanand','Sandur','Sangam','Sangamner','Sangli','Sangola','Sangrur','Sanquelim','Saranga','Sarangi','Sarwar','Satara','Satna','Sattur','Sawi','Secunderabad','Sehore','Sendhwa','Serampore','Shadnagar','Shahabad','Shahapur','Shahdara','Shahdol','Shahjahanpur','Shahkot','Shamsabad','Shanti Grama','Shillong','Shimla','Shimoga','Shirgaon','Shiv','Sholavandan','Shoranur','Shrigonda','Shyamnagar','Sibsagar','Sidhi','Sidhpur','Sikar','Sikka','Silchar','Siliguri','Silvassa','Singarayakonda','Singtam','Sinnar','Sion','Sirhind','Sirkazhi','Sirohi','Sirsa','Sirsi','Siruguppa','Siruseri','Sirwani','Sitapur','Siuri','Sivaganga','Sivakasi','Sodhi','Sojat','Solan','Solapur','Solim','Somnath','Soni','Sonipat','Sopara','Srikakulam','Srikalahasti','Srinagar','Sriperumbudur','Srirangam','Srivilliputhur','Sukma','Sultan','Sultanpur','Sultans Battery','Suman','Sunam','Sundargarh','Surana','Suratgarh','Surendranagar','Suriapet','Tadepallegudem','Tala','Talcher','Talegaon Dabhade','Talwandi Sabo','Tambaram','Tanda','Tanuku','Tarn Taran','Teri','Tezpur','Thalassery','Thane','Thanjavur','Thasra','Thenali','Thenkasi','Thirumangalam','Thiruthani','Thiruvananthapuram','Thiruvarur','Thoothukudi','Thrissur','Tikamgarh','Tindivanam','Tinsukia','Tiptur','Tiruchchendur','Tiruchi','Tirumala','Tirumala - Tirupati','Tirunelveli','Tiruppur','Tirur','Tiruvalla','Tiruvallur','Tiruvannamalai','Tohana','Tonk','Trimbak','Tuljapur','TumkÃÂ«r','Turaiyur','Udaigiri','Udaipur','Udupi','Ujjain','Ulhasnagar','Ulubari','Umred','Unnao','Uppal','Uttarkashi','Vadamadurai','Vadner','Vadodara','Vaikam','Vainguinim','Valsad','Vandalur','Vandavasi','Vaniyambadi','Vapi','Varanasi','Vasai','Vasco','Vashi','Vazhakulam','Vellore','Verna','Vidisha','Vijapur','Vijayawada','Vikarabad','Vikasnagar','Villupuram','Vinukonda','Virar','Visakhapatnam','Visnagar','Vizianagaram','Wai','Warangal','Wardha','Wellington','Yadgir','Yamunanagar','Yanam','Yavatmal','Yeola','Yercaud'];
  constructor(
    @Inject(FormBuilder)  fb: FormBuilder,
    private registerService:RegisterService,
  ) {
    this.fb=fb;
  }

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
      city : new FormControl(''),
      state : new FormControl(''),
      zip : new FormControl('', [Validators.pattern('[0-9]*')]),
      vendorAddress : new FormControl('', [Validators.required]),
      vendorCity : new FormControl('', [Validators.required]),
      vendorState : new FormControl('', [Validators.required]),
      vendorZip : new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      vendorContact : new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(11)]),
      sameAddress: new  FormControl('')
    });
  }

  registerVendor(){
    let tempPassword="";

    tempPassword=this.form.get('password').value;
    var xorKey = 129;
    var resultPassword = "";

    for (let i = 0; i < tempPassword.length; i++) {
      resultPassword += String.fromCharCode(xorKey ^ tempPassword.charCodeAt(i));
    }

    let body={
      "address": {
        "city": this.form.get('city').value,
        "state": this.form.get('state').value,
        "street": this.form.get('address').value,
        "zipCode": this.form.get('zip').value
      },
      "dob": this.form.get('DOB').value,
      "email": this.form.get('email').value,
      "firstName": this.form.get('firstName').value,
      "gender":    this.form.get('gender').value,
      "lastName":  this.form.get('lastName').value,
      "mobileNo":  this.form.get('contact').value,
      "password":  resultPassword,
      "role":      "vendor",
      "shopAddress": {
        "city": this.form.get('vendorCity').value,
        "state": this.form.get('vendorState').value,
        "street": this.form.get('vendorAddress').value,
        "zipCode": this.form.get('vendorZip').value
      },
      "vendorMobileNo": this.form.get('vendorContact').value
    };
    console.log(this.form.value);

    this.registerService.register(body).subscribe((res) =>{
      alert("Registered");
    }, (res:Response) =>{
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


  setAddress(){
if( this.form.get('sameAddress').value==false){
    if(this.form.get('city').value=="" || this.form.get('state').value=="" ||  this.form.get('address').value=="" || this.form.get('zip').value==""){
    alert("Address not properly entered");
    }
    else{
      let city= this.form.get('city').value;
       let state= this.form.get('state').value;
        let street= this.form.get('address').value;
        let zipCode=this.form.get('zip').value;

  this.form.patchValue({
    vendorAddress:  street,
    vendorCity: city,
    vendorState:  state,
    vendorZip: zipCode
  });

    }
}
  }

}
