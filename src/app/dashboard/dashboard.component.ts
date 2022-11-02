import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  displayDashboard:any = [];
  
  dashboardToggle(){
    let role = JSON.parse(localStorage.getItem('role')!);
    if(!role){
      this.displayDashboard = false;
      alert('kjkgj');
      console.log('not');
    }
    else{
      this.displayDashboard = true;
      alert('kjkgj');
      console.log('yes');
    }
  }

}
