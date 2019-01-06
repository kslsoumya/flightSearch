import { Component, OnInit, Input } from '@angular/core';
import { ARIA_DESCRIBER_PROVIDER_FACTORY } from '@angular/cdk/a11y';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flightDetails: {
    Duration:String,
    Price:Number,
    Arrival : String,
    Departure :String,
    Id : String,
    Airlines:String,
  };

  constructor() { }

  ngOnInit() {
  }

}
