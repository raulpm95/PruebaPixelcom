import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HttpAttributes } from './header';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getSlots(date: Date): Promise<any> {
    const header = new HttpHeaders({
      'Authorization': HttpAttributes['token']
    });
    const urlDate: string = this.datePipe.transform(date, 'yyyy-MM-dd');
    return this.http.get(HttpAttributes['url'] + urlDate, { headers: header }).toPromise();
  }
}
