import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component(
  {
    selector: 'app-datepicker',
    templateUrl: 'datepicker.component.html'
  }
)
export class DatepickerComponent {

  selectedDate = new Date();
  @Output() onDataSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  onDateChange(e:any): void {
    this.selectedDate = e.value;
    this.onDataSelected.emit(this.selectedDate);
  }
}
