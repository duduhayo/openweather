import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../../open-weather-service.service';

@Component({
  selector: 'app-open-weather-cmp',
  templateUrl: './open-weather-cmp.component.html',
  styleUrls: ['./open-weather-cmp.component.css']
})


export class OpenWeatherCmpComponent implements OnInit {
  bestHumididyMale:any = 50
  bestTempMale:any=21
  bestWeathesrMale:any

  constructor(owsSerivce:OpenWeatherService) {
     owsSerivce.getBboxData(-180,-52,180,63,10).subscribe( (data) =>{this.getBestWeather(data)});
   }

   public  getBestWeather(owResponseData)
    {

      var currElemet;
      var bestTempDiff;
      var bestHumidityDiff;
      var currTempDiff;
      var currHumidityDiff;
      var bestCandidate;
      var currBestCandidate;

      var result = [];

       if (owResponseData && owResponseData.list)
       {
        for (let index = 0; index < owResponseData.list.length; index++)
        {
            currElemet = owResponseData.list[index];
            currHumidityDiff = Math.abs(currElemet.main.humidity - this.bestHumididyMale) /10;
            currTempDiff = Math.abs(currElemet.main.temp - this.bestTempMale);
            currBestCandidate = currTempDiff + currHumidityDiff;
            if(index == 0)
            {
              bestHumidityDiff = currHumidityDiff;
              bestTempDiff = currTempDiff;
              bestCandidate = currBestCandidate;
            }
            else
            {
                if(currBestCandidate < bestCandidate)
                {
                  bestCandidate = currBestCandidate;
                  result.push(currElemet);
                }
            }
        }


      }

      this.bestWeathesrMale = result.reverse();

    }

  ngOnInit() {
  }

}
