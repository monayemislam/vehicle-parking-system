import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName:any = [];
  userLocation:any;
  lat:any;
  lng:any;
  latLng:any;
  
  


  constructor() { 
    this.userName = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit()
  {
    navigator.geolocation.getCurrentPosition((response)=>{
      this.userLocation = response;
      this.lat = response.coords.latitude;
      this.lng = response.coords.longitude;
      this.latLng = {
        userLat : this.lat,
        userLng : this.lng
    
      }
      localStorage.setItem('lat',this.lat);
      localStorage.setItem('lng',this.lng);
      // localStorage.setItem('lat',JSON.stringify(this.lat));
      // localStorage.setItem('lng',JSON.stringify(this.lng));
    });
  }
  
  
  signOutUser(){
    localStorage.clear();
    console.log("sign out");
  }

  getUser()
  {
    
  }

}
