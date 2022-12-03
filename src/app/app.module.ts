import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLocationComponent } from './common/user-location/user-location.component';
import { AgmCoreModule } from '@agm/core';
import { ListParkingSpaceComponent } from './parking-space/list-parking-space/list-parking-space.component';
import { CompletedRequestsComponent } from './requests/completed-requests/completed-requests.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateParkingSpaceComponent } from './parking-space/create-parking-space/create-parking-space.component';
import { NewRequestsComponent } from './requests/new-requests/new-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserLocationComponent,
    ListParkingSpaceComponent,
    CompletedRequestsComponent,
    OverviewComponent,
    CreateParkingSpaceComponent,
    NewRequestsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLL6lfcv6Poo0zf507ljah35gRvMBe23s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
