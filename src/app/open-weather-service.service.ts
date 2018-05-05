import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {



  client:Http;
  constructor(http:Http) {
    this.client = http;

  }


  public async getTheBestComfWeather() {

      let url:string = 'http://api.openweathermap.org/data/2.5/box/city?bbox=-180,-52,180,63,1&appid=9ebe67e1eb2ee9236eb779697cd4035e';
      var weatherResponse = await this.client.get(url).toPromise().then(function(data){debugger});

  }
}
