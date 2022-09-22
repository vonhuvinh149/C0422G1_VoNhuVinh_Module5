import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  result : number;

  constructor() {
  }

  ngOnInit(): void {
  }

  total(num1: string, num2: string, operator: string) {
    this.result = eval(num1 + operator + num2);
  }
}
