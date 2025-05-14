import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData:any={}
  constructor(private _weatherService:WeatherService){
    _weatherService.getWeather().subscribe((data:any)=>{
this.weatherData=data;
console.log(this.weatherData)
    },(err)=>{
      alert("internal server error")
    })
  }
}
