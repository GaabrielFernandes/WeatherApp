import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { response } from 'express';
import { error } from 'console';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements  OnInit,  OnDestroy {
  private readonly  destroy$: Subject<void> = new Subject()
  initialCityName = 'Curitiba'
  weatherDatas!:WeatherDatas

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName)
  }





  getWeatherDatas(cityName:string){
    this.weatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next:(response)=>{
        console.log(response)
        return response;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  onSubmit():void{
    this.getWeatherDatas(this.initialCityName)
    this.initialCityName = ''
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
