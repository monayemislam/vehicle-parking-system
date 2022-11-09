import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {


  zoom:number = 18;

  @Input() locationData:any;
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.locationData);
  }

}
