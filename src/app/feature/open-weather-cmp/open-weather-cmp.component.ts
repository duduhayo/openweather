import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from './open-weather-service.service';

@Component({
  selector: 'app-open-weather-cmp',
  templateUrl: './open-weather-cmp.component.html',
  styleUrls: ['./open-weather-cmp.component.css']
})


export class OpenWeatherCmpComponent implements OnInit {
  bestHumididy: any = 50
  bestTemp: any = 21
  bestTempFemale: any = 22
  bestWeathesrMale: any;
  bestWeathesrFeMale: any;

  constructor(owsSerivce: OpenWeatherService) {
    owsSerivce.getBboxData(-180, -52, 180, 63, 1000).subscribe((data) => { this.getBestWeather(data) });
  }

  public getBestWeather(owResponseData: any) {

    var currElemet;
    var currTempDiff;
    var currTempDiffFemale;
    var currHumidityDiff;
    var bestCandidate;
    var bestCandidateFemale;
    var currBestCandidate;
    var currBestCandidateFemale;

    var resultMale = [];
    var resultFemale = [];

    if (owResponseData && owResponseData.list) {
      for (let index = 0; index < owResponseData.list.length; index++) {
        currElemet = owResponseData.list[index];
        currHumidityDiff = Math.abs(currElemet.main.humidity - this.bestHumididy) / 10;
        currTempDiff = Math.abs(currElemet.main.temp - this.bestTemp);
        currTempDiffFemale = Math.abs(currElemet.main.temp - this.bestTempFemale);
        currBestCandidate = currTempDiff + currHumidityDiff;
        currBestCandidateFemale = currTempDiffFemale + currHumidityDiff;

        if (index == 0) {
          bestCandidate = currBestCandidate;
          bestCandidateFemale = currBestCandidateFemale;
        }
        if (currBestCandidate <= bestCandidate) {
          bestCandidate = currBestCandidate;
          resultMale.push(currElemet);
        }
        if (currBestCandidateFemale <= bestCandidateFemale) {
          bestCandidateFemale = currBestCandidateFemale;
          resultFemale.push(currElemet);
        }
      }
    }
    this.bestWeathesrMale = resultMale.reverse().slice(0, 1);
    this.bestWeathesrFeMale = resultFemale.reverse().slice(0, 1);
  }

  ngOnInit() {
  }

}
