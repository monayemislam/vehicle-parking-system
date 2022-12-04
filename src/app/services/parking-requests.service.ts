import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingRequestsService {

  header = new HttpHeaders({
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('accessToken')!)}`,
    'Accept': `application/json`
  });

  constructor(private http:HttpClient) { }
  
  public createNewParkingRequest(data:any):Observable<any>
  {
     return this.http.post('http://127.0.0.1:8000/api/create-parking-request',data,{
       headers: this.header
     });
  }
}
