import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student= {
    studentCode : 'sv-002',
    studentName : 'Nguyen Van C',
    address : 'hcm'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createStudentForm: NgForm) {
        // console.log(createStudentForm.value);
    console.log(this.student);
  }
}
