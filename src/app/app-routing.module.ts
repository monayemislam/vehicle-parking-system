import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { ListParkingSpaceComponent } from './parking-space/list-parking-space/list-parking-space.component';
import { CompletedRequestsComponent } from './requests/completed-requests/completed-requests.component';

const routes: Routes = [
  { path: 'authentication/register', component:RegisterComponent },
  { path: '', component:AppComponent },
  { path: 'parking-space/list-parking-space', component:ListParkingSpaceComponent  },
  { path: 'requests/completed-requests', component:CompletedRequestsComponent },
  { path: 'overview', component:OverviewComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
