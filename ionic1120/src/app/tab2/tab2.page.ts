import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  cars: Array<CarModel>;

  constructor(private _servCar: CarService) { }

  ngOnInit(): void {
    this._servCar.getCars().subscribe(x => this.cars = x);
  }

}
