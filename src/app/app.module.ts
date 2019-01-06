import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}  from '@angular/router';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { Ng5SliderModule } from 'ng5-slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatTabsModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';


import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { JSONService } from './json.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTabsModule,
    Ng5SliderModule,
    RouterModule.forRoot([
      {path :'home',component :FlightsComponent },
      {path :'',component:FlightsComponent}
    ])
  ],
  exports :[
    FlightDetailComponent
  ],
  providers: [JSONService],
  bootstrap: [AppComponent]
})
export class AppModule { }
