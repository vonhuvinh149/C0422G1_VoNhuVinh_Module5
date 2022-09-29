import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  loggincomponent: FormGroup;

  constructor() {
    this.loggincomponent = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}')])
    });
  }

  ngOnInit(): void {
  }

  onSubmitLoggin() {
    console.log(this.loggincomponent.value);
  }
}
