import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeStaysComponent } from './home-stays/home-stays.component';
import { HolidayPackagesComponent } from './holiday-packages/holiday-packages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"flight",component:FlightComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"home-stays",component:HomeStaysComponent},
  {path:"holiday-packages",component:HolidayPackagesComponent},
  {path:"",redirectTo:"/flight",pathMatch:"full"}, // default route
  {path:"**",component:PageNotFoundComponent}, //wildcard-route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






