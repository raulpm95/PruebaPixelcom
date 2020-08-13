import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from '../app/components/datepicker/datepicker.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { ErrorMessageComponent } from '../app/components/alerts/errorMessage/errorMessage.component';
import { EmptyResultMessageComponent } from '../app/components/alerts/emptyResultMessage/emptyResultMessage.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    ErrorMessageComponent,
    EmptyResultMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
