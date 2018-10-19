import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';
import {WeatherProvider} from './../../providers/weather/weather';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  city:string;
  value: string;
  humidity: string;
  wspeed: string;
  main: string;
  description: string;
  wind: string;
  Temp: number;
  date: number;
  searchTerm: string = '';

  constructor(public navCtrl: NavController,public navParams: NavParams, private weatherP: WeatherProvider) {

  }
  initializeWeather(): void {
    this.weather = this.city;
  }
  ionViewDidLoad() {
    this.initializeWeather();
  }

  getWeather() {
    this.weatherP.getWeather(this.city).subscribe(results => {
      this.weather = results;
      this.main = this.weather.weather[0].main;
      this.humidity=this.weather.main.humidity
      this.Temp = this.weather.main.temp -273.15;
      this.wind = this.weather.wind.speed;
      this.description = this.weather.weather[0].description;
      this.date = this.weather.dt;
      console.log("response", results);
      this.initializeWeather();
      if (!this.city) {
        return this.weather;
      }

    });
    
  }
  searchRecipes(){
    // Reset recipes array back to all of the items
    this.initializeWeather();

    // if the search term is an empty string return all items
    if (!this.searchTerm) {
      return this.weather;
    }

    // Filter recipes
    this.weather = this.weather.filter((item) => {
        return item.recipeName.toLowerCase().indexOf(this.city.toLowerCase()) > -1;
    }); 
  }
}
  
  
  
  