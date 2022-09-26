import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {RatingBar} from "./rating-bar";

@Component({
  selector: 'app-angular-rating-bar',
  templateUrl: './angular-rating-bar.component.html',
  styleUrls: ['./angular-rating-bar.component.css']
})
export class AngularRatingBarComponent implements OnInit {

  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  @Output()
  rateChange = new EventEmitter<number>();
  ratingUnits: Array<RatingBar> = [];
  showRatingValue = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }
  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }
  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

}
