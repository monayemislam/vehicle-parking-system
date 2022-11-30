import { Component, OnInit } from '@angular/core';
import { ParkingSpaceService } from 'src/app/services/parking-space.service';

@Component({
  selector: 'app-list-parking-space',
  templateUrl: './list-parking-space.component.html',
  styleUrls: ['./list-parking-space.component.css']
})
export class ListParkingSpaceComponent implements OnInit {

  parkingSpaceList:any = [];
  errorMessage:any = null;
  constructor(private parkingSpace:ParkingSpaceService) { }

  ngOnInit(): void {
    
    // this.parkingSpaceList = this.parkingSpace.getUserSpecificAvailableSpace({}).subscribe(
    //   (data) => {
    //     this.parkingSpaceList = data;
    //     console.log("Hello");
    //     console.log('parking space',this.parkingSpaceList);
    //   });
    this.getParkingList();
  }

  getParkingList(){
    this.parkingSpace.getUserSpecificAvailableSpace({}).subscribe((res:any) => {
      this.parkingSpaceList = res.data;
      //   console.log("Hello");
      //   console.log('parking space',this.parkingSpaceList);
    }),
    (error:any) => {
      console.log('res', error);
    };
  }

}
