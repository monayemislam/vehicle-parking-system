import { Component, OnInit } from '@angular/core';
import { SpaceTypeService } from 'src/app/services/space-type.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ParkingSpaceService } from 'src/app/services/parking-space.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-parking-space',
  templateUrl: './create-parking-space.component.html',
  styleUrls: ['./create-parking-space.component.css']
})
export class CreateParkingSpaceComponent implements OnInit {

  spaceTypeList = [];
  parkingSpaceData:any = [];
  user:any = JSON.parse(localStorage.getItem('user')!);
  formGroup!: FormGroup;

  constructor(private route:Router,private spaceType:SpaceTypeService, private parkingSpace:ParkingSpaceService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getSpaceList();
    this.isFormValid();
  }

  getSpaceList(){
    this.spaceType.getSpaceType({}).subscribe((res:any) => {
      this.spaceTypeList = res.data;
    }),
    (error:any) => {
      console.log('res', error);
    };
  }

  isFormValid()
  {
    this.formGroup = new FormGroup({
      spaceName: new FormControl('',[Validators.required]),
      spaceType: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required]),
      comments: new FormControl('',[Validators.required])
    })
  }

  createSpaceSubmit(){
    
    this.parkingSpaceData = {
      'space_name' : this.formGroup.value.spaceName,
      'space_type_id' : JSON.parse(this.formGroup.value.spaceType),
      'user_id' :  this.user.id,
      'latitude' : localStorage.getItem('lat')!,
      'longitude' : localStorage.getItem('lng')!,
      // 'latitude' : JSON.stringify(localStorage.getItem('lat')!),
      // 'longitude' : JSON.stringify(localStorage.getItem('lng')!),
      'status' : JSON.parse(this.formGroup.value.status),
      'comments' : this.formGroup.value.comments
  };
  
console.log(this.parkingSpaceData);

  this.parkingSpace.createUserSpecificAvailableSpace(this.parkingSpaceData).subscribe((res:any) => {
    this.parkingSpace = res.data;
      console.log('Parking Space Created',this.parkingSpace);
      this.route.navigate(['parking-space/list-parking-space']);
  }),
  (error:any) => {
    console.log('res', error);
  };




  }

}




