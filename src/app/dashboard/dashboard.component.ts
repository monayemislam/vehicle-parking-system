import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName:any = [];

  constructor() { 
    this.userName = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }


  
  
  signOutUser(){
    localStorage.clear();
    console.log("sign out");
  }

  getUser()
  {
    
  }

}
