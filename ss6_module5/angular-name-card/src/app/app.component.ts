import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countryList = [
    {id: 1, name: 'hcm '},
    {id: 1, name: 'da nang'},
    {id: 1, name: 'hue'},
    {id: 1, name: 'viet nam'},
  ]

  title = 'angular-name-card';

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
    })

  })

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
