import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserData } from './user-data/user-data';
import { UserDetails } from './user-details/user-details';
import { CityPopulation } from './city-population/city-population';

const routes: Routes = [
    { path: 'user-details', component: UserDetails },
    { path: 'city-population', component: CityPopulation },
    { path: '**', component: UserData }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
