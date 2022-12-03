import { Component, OnInit } from '@angular/core';
import { NearestParkingSpacesService } from 'src/app/services/nearest-parking-spaces.service';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.component.html',
  styleUrls: ['./new-requests.component.css']
})
export class NewRequestsComponent implements OnInit {

  paymentMethodTypeList = [];
  nearestSpacesList = [];


  constructor(private paymentMethod:PaymentMethodService, private nearestSpaces:NearestParkingSpacesService) { }

  ngOnInit(): void {
    this.paymentMethodType();
    this.nearestSpacesForParking();
  }

  paymentMethodType(){
    this.paymentMethod.getPaymentMehod({}).subscribe((res:any) => {
      this.paymentMethodTypeList = res.data;
      console.log(this.paymentMethodTypeList);
    }),
    (error:any) => {
      console.log('res', error);
    };
  }


  nearestSpacesForParking(){
    this.nearestSpaces.getNearestParkingSpaces({}).subscribe((resources:any) => {
      this.nearestSpacesList = resources.data;
      console.log(this.nearestSpacesList);
    }),
    (error:any) => {
      console.log('res', error);
    };
  }


}
