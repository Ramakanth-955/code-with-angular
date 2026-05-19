import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityPopulationService {
  constructor(private http : HttpClient) { }

  getCityPopulation(){
    return this.http.get('https://countriesnow.space/api/v0.1/countries/population/cities');
  }
  
}
