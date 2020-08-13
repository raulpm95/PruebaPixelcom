import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  selectedDate: Date = new Date();
  showProgressBar: Boolean = false;
  valueLoad: number = 0;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getSlots();
  }

  onDateSelected(e: Date) {
    this.selectedDate = e;
    this.getSlots();
  }

  private getSlots() {
    this.showProgressBar = true;
    this.http.getSlots(this.selectedDate).then(this.onGetSlotsSuccess.bind(this)).catch(this.onGetSlotsError.bind(this));
  }

  private onGetSlotsSuccess(e: any) {
    e.data.forEach(element => {
      this.valueLoad += 1;
    });
    this.showProgressBar = false;
  }

  private onGetSlotsError(err: any) {
    this.showProgressBar = false;
    console.log('Error');
    console.log(err);
  }
}
