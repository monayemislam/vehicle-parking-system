import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NearestParkingSpacesService } from 'src/app/services/nearest-parking-spaces.service';
import { ParkingRequestsService } from 'src/app/services/parking-requests.service';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.component.html',
  styleUrls: ['./new-requests.component.css']
})
export class NewRequestsComponent implements OnInit {

  paymentMethodTypeList = [];
  nearestSpacesList = [];
  formGroup!: FormGroup;
  newParkingRequestData:any = [];
  newParkingRequestCreate = [];
  user:any = JSON.parse(localStorage.getItem('user')!);


  constructor(private newParkingRequestsInstancce:ParkingRequestsService, private paymentMethod:PaymentMethodService, private nearestSpaces:NearestParkingSpacesService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.paymentMethodType();
    this.nearestSpacesForParking();
    this.isFormValid()
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

//Submit Form Data for creating new parking space requests
isFormValid()
  {
    this.formGroup = new FormGroup({
      available_space_id: new FormControl('',[Validators.required]),
      payment_method_id: new FormControl('',[Validators.required]),
      start_date: new FormControl('',[Validators.required]),
      start_time: new FormControl('',[Validators.required]),
      end_date: new FormControl('',[Validators.required]),
      end_time: new FormControl('',[Validators.required])
    })
  }

createNewRequestSubmit(){
    
    this.newParkingRequestData = {
      'available_space_id' : this.formGroup.value.available_space_id,
      'payment_method_id' : JSON.parse(this.formGroup.value.payment_method_id),
      'requestor_id' :  this.user.id,
      'requestor_latitude' : localStorage.getItem('lat')!,
      'requestor_longitude' : localStorage.getItem('lng')!,
      'start_date' : this.formGroup.value.start_date,
      'start_time' : this.formGroup.value.start_time,
      'end_date' : this.formGroup.value.end_date,
      'end_time' : this.formGroup.value.end_time
  };

  console.log('Before submit check data',this.newParkingRequestData);

  this.newParkingRequestsInstancce.createNewParkingRequest(this.newParkingRequestData).subscribe((res:any) => {
    this.newParkingRequestCreate = res.data;
      console.log('Parking Space Created',this.newParkingRequestCreate);
      this.router.navigate(['parking-space/create-parking-space']);
  }),
  (error:any) => {
    console.log('res', error);
  };


}

}