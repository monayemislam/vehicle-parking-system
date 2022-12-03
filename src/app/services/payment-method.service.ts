import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  header = new HttpHeaders({
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('accessToken')!)}`
  });

  constructor(private http:HttpClient) { }

  public getPaymentMehod(data:any):Observable<any>
  {
     return this.http.get('http://127.0.0.1:8000/api/payment-method',{
       headers: this.header
     });
  }
}
