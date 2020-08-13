import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Header } from './header';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getSlots(): Promise<any> {
    const header = new HttpHeaders({
      'Authorization': Header['token']
    });
    return this.http.get('http://test.services.pixeltiming.com:4400/booking/availability?date=2020-08-28', { headers: header }).toPromise();
  }
}
