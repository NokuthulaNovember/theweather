import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  appid = '&&appid=1c74efb8d87a57365cc9c294646ad5e9';
  url='http://api.openweathermap.org/data/2.5/weather?q=' ;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }
  getWeather(city:string) {
    return this.http.get(this.url+city+',za'+this.appid);
  }
 
}



