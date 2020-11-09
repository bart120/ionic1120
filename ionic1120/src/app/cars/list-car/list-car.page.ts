import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'list-car.page.html',
  styleUrls: ['list-car.page.scss']
})
export class ListCarPage implements OnInit {

  cars: Array<CarModel>;

  constructor(private _servCar: CarService, private _router: Router) { }

  ngOnInit(): void {
    this._servCar.getCars().subscribe(x => this.cars = x);
  }

  onAdd(): void {
    this._router.navigate(['/tabs/tab2/add']);
  }

}
