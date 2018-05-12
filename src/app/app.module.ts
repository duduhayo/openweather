import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { OpenWeatherCmpComponent } from './feature/open-weather-cmp/open-weather-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenWeatherCmpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
