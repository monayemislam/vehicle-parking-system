import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicle-parking-system';
  
  dashboardToggle(){
    let role = JSON.parse(localStorage.getItem('role')!);
    if(!role){
      return false;
    }
    else{
      return true;
    }
  }
}
