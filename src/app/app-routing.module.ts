import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateParkingSpaceComponent } from './parking-space/create-parking-space/create-parking-space.component';
import { ListParkingSpaceComponent } from './parking-space/list-parking-space/list-parking-space.component';
import { CompletedRequestsComponent } from './requests/completed-requests/completed-requests.component';
import { NewRequestsComponent } from './requests/new-requests/new-requests.component';

const routes: Routes = [
  { path: 'authentication/register', component:RegisterComponent },
  { path: '', component:AppComponent },
  { path: 'parking-space/list-parking-space', component:ListParkingSpaceComponent  },
  { path: 'parking-space/create-parking-space', component:CreateParkingSpaceComponent },
  { path: 'requests/completed-requests', component:CompletedRequestsComponent },
  { path: 'requests/new-requests', component:NewRequestsComponent },
  { path: 'overview', component:OverviewComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
