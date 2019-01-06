import { Component, OnInit } from '@angular/core';
import { JSONService } from '../json.service';
import { Options, LabelType } from 'ng5-slider';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  minValue: number = 1000;
  maxValue: number = 5000;
  options: Options = {
    floor: 1000,
    ceil: 8000,
    step: 200,
    showOuterSelectionBars: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + 'Rs';
        case LabelType.High:
          return value + 'Rs';
        default:
          return value + 'Rs';
      }
    }
  };

  public fromCity;
  public toCity;
  public departDate;
  public passengers;
  public travelClass;
  public returnDate;
  public filteredFlights;
  public isRoundTrip = false;
  public oneWayFlights;
  public returnFlights;
  public shouldDisable = false;
  public isError = false;

  citiesList = ['Bangalore', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Vijayawada', 'Kolkatta', 'Mumbai', 'Goa'];
  public flightsList;
  classList = ['Economy', 'Business', 'Premium Economy']
  constructor(public jsonService: JSONService) { }

  ngOnInit() {
    this.jsonService.getFlightData().subscribe(
      (resp) => {
        this.flightsList = resp;
      }
    );
  }

  public searchFlights() {
    this.minValue =1000;
    this.maxValue = 5000;
    this.isRoundTrip = false;
    this.filteredFlights = this.flightsList.filter
      (ele => {
        return ele.From === this.fromCity && ele.To === this.toCity
      });
  }

  public roundTripSearch = () => {
    this.minValue =1000;
    this.maxValue = 5000;
    this.isRoundTrip = true;
    this.oneWayFlights = this.flightsList.filter(
      ele => {
        return (ele.From === this.fromCity && ele.To === this.toCity)
      }
    );
    this.returnFlights = this.flightsList.filter(
      ele => {
        return (ele.To === this.fromCity && ele.From === this.toCity)
      }
    )
  }

  public priceChange = (event) => {
    if (!this.isRoundTrip) {
      this.searchFlights();
      this.filteredFlights = this.filteredFlights.filter(ele => {
        return (ele.Price > event.value && ele.Price < event.highValue)
      })
    } else {
      this.roundTripSearch();
      this.oneWayFlights = this.oneWayFlights.filter(ele => {
        return (ele.Price > event.value && ele.Price < event.highValue)
      });
      this.returnFlights = this.returnFlights.filter(ele => {
        return (ele.Price > event.value && ele.Price < event.highValue)
      });
    }
  }

  public flightSearch = () => {
    if (this.returnDate) {
      this.isRoundTrip = true;
      this.roundTripSearch();
    } else {
      this.isRoundTrip = false;
      this.searchFlights();
    }
  }

  public inputChange = () => {
    if (this.returnDate || this.departDate) {
      this.shouldDisable = false;
    } else {
      this.shouldDisable = true;
    }
  }
}
