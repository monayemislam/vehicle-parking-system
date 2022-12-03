import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NearestParkingSpacesService {

  

  constructor(private http:HttpClient) { }

  header = new HttpHeaders({
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('accessToken')!)}`
  });
  
  u = 'http://127.0.0.1:8000/api/nearest-parking-space/';
  lat = localStorage.getItem('lat');
  lng = localStorage.getItem('lng');

  public getNearestParkingSpaces(data:any):Observable<any>
  { 
    const url = `${this.u}${this.lat}/${this.lng}`;
     return this.http.get(url,{
       headers: this.header
     });
  }
  

}
