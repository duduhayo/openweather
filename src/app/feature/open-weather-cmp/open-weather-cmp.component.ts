import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../../open-weather-service.service';

@Component({
  selector: 'app-open-weather-cmp',
  templateUrl: './open-weather-cmp.component.html',
  styleUrls: ['./open-weather-cmp.component.css']
})


export class OpenWeatherCmpComponent implements OnInit {

  constructor(owsSerivce:OpenWeatherService) {


    owsSerivce.getTheBestComfWeather();

   }



  ngOnInit() {
  }

}
