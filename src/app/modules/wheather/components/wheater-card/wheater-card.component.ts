import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
})
export class WheaterCardComponent {
  // Dados  da previsão do tempo  recebidos  pelo componente pai
   @Input() weatherDatasInput!:  WeatherDatas



}
