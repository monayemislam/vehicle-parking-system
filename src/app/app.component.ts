import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeoLocationApiService } from './services/geo-location-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicle-parking-system';
  _router:string;
  location:any;

  constructor(private router:Router, private geoLocation:GeoLocationApiService) {
    this._router = router.url;
  }

 isLoggedIn(){
    let role = JSON.parse(localStorage.getItem('role')!);
    if(!role){
      return false;
    }
    else{
      return true;
    }
  }




}
