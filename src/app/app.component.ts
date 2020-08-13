import { Component } from '@angular/core';
import { HttpService } from '../app/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedDate: Date;

  constructor(private http: HttpService) {}

  onDateSelected(e: Date) {
    this.selectedDate = e;
    console.log(this.selectedDate);
    this.http.getSlots().then(this.onGetSlotsSuccess.bind(this)).catch(this.onGetSlotsError.bind(this));
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
