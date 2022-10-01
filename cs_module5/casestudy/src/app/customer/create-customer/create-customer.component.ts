import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;

  constructor(private customerService: CustomerService, private router: Router) {
    this.createCustomerForm = new FormGroup({
      customerId: new FormControl(),
      customerName: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      idCard: new FormControl(),
      customerTypeId: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
    })
  }

  ngOnInit(): void {

  }

  getSubmitCreate() {
    this.customerService.getCreateCustomer(this.createCustomerForm.value)
    this.router.navigateByUrl('/list-customer')
  }

}
