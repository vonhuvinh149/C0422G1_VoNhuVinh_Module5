import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-loggin',
  templateUrl: './form-loggin.component.html',
  styleUrls: ['./form-loggin.component.css']
})
export class FormLogginComponent implements OnInit {
  formReactive: FormGroup;

  constructor() {
    this.formReactive = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.formReactive.value);
  }
}
