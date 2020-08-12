import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component(
  {
    selector: 'app-datepicker',
    templateUrl: 'datepicker.component.html'
  }
)
export class DatepickerComponent {

  selectedDate = new Date();
  constructor() {}
}
