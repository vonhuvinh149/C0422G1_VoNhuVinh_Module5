import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { DetailComponent } from './customer/detail/detail.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { DetailFacilityComponent } from './facility/detail-facility/detail-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    DetailComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    DetailFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
