import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  selectedDate: Date = new Date();
  showProgressBar: Boolean = false;
  showErrorMessage: Boolean = false;
  showWarningMessage: Boolean = false;
  slots: any[];

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
    this.showErrorMessage = false;
    this.showWarningMessage = false;
    this.http.getSlots(this.selectedDate).then(this.onGetSlotsSuccess.bind(this)).catch(this.onGetSlotsError.bind(this));
  }

  private onGetSlotsSuccess(e: any) {
    this.slots = e.data;
    this.showWarningMessage = this.slots.length === 0;
    this.hideProgressBar();
  }

  private onGetSlotsError(err: any) {
    this.hideProgressBar();
    this.showErrorMessage = true;
  }

  private hideProgressBar() {
    this.showProgressBar = false;
  }
}
