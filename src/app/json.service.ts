import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JSONService {


  constructor(private httpService: HttpClient) { }


  public getFlightData  =() =>{
    return   this.httpService.get('../../assets/flights.json');
  }
}
