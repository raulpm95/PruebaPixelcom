import { Component, OnInit } from '@angular/core';
import { HttpService } from '../app/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  selectedDate: Date = new Date();

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getSlots();
  }

  onDateSelected(e: Date) {
    this.selectedDate = e;
    this.getSlots();
  }

  private getSlots() {
    this.http.getSlots(this.selectedDate).then(this.onGetSlotsSuccess.bind(this)).catch(this.onGetSlotsError.bind(this));
  }

  private onGetSlotsSuccess(e: any) {
    console.log('Correcto');
    console.log(e);
  }

  private onGetSlotsError(err: any) {
    console.log('Error');
    console.log(err);
  }
}
