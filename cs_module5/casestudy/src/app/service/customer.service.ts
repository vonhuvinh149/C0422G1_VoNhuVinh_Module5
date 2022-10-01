import {Injectable} from '@angular/core';
import {ICustomer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: ICustomer[] = [{
    customerId: 1,
    customerTypeId: 1,
    customerName: 'nhân',
    dateOfBirth: '1994-12-24',
    gender: true,
    idCard: '123456789',
    phone: '0978924518',
    email: 'nhanchicken@gmail.com',
    address: 'đà nẵng'
  }, {
    customerId: 2,
    customerTypeId: 2,
    customerName: 'huy',
    dateOfBirth: '1999-10-23',
    gender: true,
    idCard: '123456789',
    phone: '0978924518',
    email: 'huychicken@gmail.com',
    address: 'đà nẵng'
  }, {
    customerId: 3,
    customerTypeId: 3,
    customerName: 'hạnh',
    dateOfBirth: '1999-09-22',
    gender: false,
    idCard: '123456555',
    phone: '0987876765',
    email: 'hanhchicken@gmail.com',
    address: 'hcm'
  }
  ];

  constructor() {
  }

  getAllCustomer() {
    return this.customer;
  }

  getCreateCustomer(customers: ICustomer) {
    this.customer.push(customers);
  }

  getCustomerById(id: number) {
    return this.customer.filter(w => w.customerId == id)[0];
  }

  getUpdateCustomer(customers: ICustomer) {
    for (let i = 0; i < this.customer.length; i++) {
      if (this.customer[i].customerId == customers.customerId) {
        this.customer[i] = customers;
        break;
      }
    }
  }
}
