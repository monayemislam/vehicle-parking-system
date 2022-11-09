import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationApiService {
  // Apikey=AIzaSyB11kG-uahuLfAkdLV29tV7fJJf-u4EkdI
  constructor(private http:HttpClient) { }

  getLocation(){
    return this.http.get("https://ipapi.co/8.8.8.8/json/");
  }
}
