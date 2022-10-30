import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private htttp:HttpClient) { }
  accessToken:any = [];
  public login(data:any):Observable<any>{
    return this.htttp.post(`${baseUrl}login`,data);
    // return this.htttp.post('http://127.0.0.1:8000/api/login',data);
    
  }
}
