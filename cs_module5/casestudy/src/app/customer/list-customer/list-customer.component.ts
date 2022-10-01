import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: ICustomer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer()
  }

  getAllCustomer() {
    this.customer = this.customerService.getAllCustomer();
  }

}
