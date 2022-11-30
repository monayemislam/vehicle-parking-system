import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpaceService {

  

  // header = new HttpHeaders({
  //   'accessToken' : JSON.parse(localStorage.getItem('accessToken')!)
  // });

  header = new HttpHeaders({
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('accessToken')!)}`,
    'Accept': `application/json`
  });


  constructor(private http:HttpClient) {

   }

   public getUserSpecificAvailableSpace(data:any):Observable<any>
   {
      return this.http.get('http://127.0.0.1:8000/api/get-available-space',{
        headers: this.header,
      });
   }

  public createUserSpecificAvailableSpace(data:any):Observable<any>
  {
     return this.http.post('http://127.0.0.1:8000/api/create-available-space',data,{
       headers: this.header
     });
  }


}
