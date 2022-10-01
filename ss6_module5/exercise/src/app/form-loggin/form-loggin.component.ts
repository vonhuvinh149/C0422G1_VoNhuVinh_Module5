import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

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
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      passFormControl: new FormControl('', [Validators.required]),
      confirmFormControl: new FormControl('', [Validators.required]),
    }, {validators: this.checkPasswords});
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('passFormControl').value;
    const confirmPass = group.get('confirmFormControl').value;
    return pass === confirmPass ? null : {notSame: true};
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.formReactive.value);
  }
}
