import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {CreateFacilityComponent} from "./facility/create-facility/create-facility.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'create-facility', component: CreateFacilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
