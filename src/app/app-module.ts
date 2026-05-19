import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserData } from './user-data/user-data';
import { HttpClientModule } from '@angular/common/http';
import { UserDetails } from './user-details/user-details';
import { UserDetailsService } from './services/user-details';
import { CityPopulation } from './city-population/city-population';

@NgModule({
  declarations: [
    App,
    UserData,
    UserDetails,
    CityPopulation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserDetailsService,
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
