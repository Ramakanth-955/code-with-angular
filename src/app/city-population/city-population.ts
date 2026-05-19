import { Component } from '@angular/core';
import { CityPopulationService } from '../services/city-population.service';

@Component({
  selector: 'app-city-population',
  standalone: false,
  templateUrl: './city-population.html',
  styleUrl: './city-population.scss',
})
export class CityPopulation {

  populationData: any[] = [];
  constructor(private cityPopulation: CityPopulationService){
    this.cityPopulation.getCityPopulation().subscribe((data: any) =>{
      this.populationData = data.data;
      
    });
  }


}
