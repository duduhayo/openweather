import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {



  client:HttpClient;
  constructor(http:HttpClient) {
    this.client = http;

  }
  public getBboxData(longLeft,latBottom,longRight,latTop,zoom)
  {
    const url = `http://api.openweathermap.org/data/2.5/box/city?bbox=${longLeft},${latBottom},${longRight},${latTop},${zoom}&appid=9ebe67e1eb2ee9236eb779697cd4035e`;
    let response:any = {};
    return this.client.get(url);
  }

}
