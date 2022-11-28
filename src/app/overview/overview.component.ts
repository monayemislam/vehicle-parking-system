import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  userName:any = [];
  userLocation:any;
  lat:any;
  lng:any;
  latLng:any;

  constructor() {
    this.userName = JSON.parse(localStorage.getItem('user')!);
   }

  ngOnInit(): void {
    this.userCurrentLocation();
  }

  userCurrentLocation(){
    navigator.geolocation.getCurrentPosition((response)=>{
      this.userLocation = response;
      this.lat = response.coords.latitude;
      this.lng = response.coords.longitude;
      this.latLng = {
        userLat : this.lat,
        userLng : this.lng
    
      }
    });
  }

}
