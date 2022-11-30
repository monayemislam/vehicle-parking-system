import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceTypeService {

  header = new HttpHeaders({
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('accessToken')!)}`
  });

  constructor(private http:HttpClient) { }

  public getSpaceType(data:any):Observable<any>
  {
     return this.http.get('http://127.0.0.1:8000/api/spaceType',{
       headers: this.header
     });
  }

}
