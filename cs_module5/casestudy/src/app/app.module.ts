import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {DetailComponent} from './customer/detail/detail.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {DetailFacilityComponent} from './facility/detail-facility/detail-facility.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    DetailComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    DetailFacilityComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CreateContractComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
