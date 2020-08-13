import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedDate: Date;

  constructor() {}

  onDateSelected(e: Date) {
    this.selectedDate = e;
    console.log(this.selectedDate);
  }
}
