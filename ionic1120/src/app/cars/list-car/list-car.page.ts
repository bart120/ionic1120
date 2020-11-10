import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'list-car.page.html',
  styleUrls: ['list-car.page.scss']
})
export class ListCarPage implements OnInit {

  cars: Array<CarModel>;
  private _sub: Subscription;

  constructor(private _servCar: CarService, private _router: Router) { }

  ngOnInit(): void {

  }

  onAdd(): void {
    this._router.navigate(['/tabs/tab2/add']);
  }

  ionViewWillEnter(): void {
    this._sub = this._servCar.getCars().subscribe(x => this.cars = x);
  }

  ionViewWillLeave(): void {
    this._sub.unsubscribe();
  }

}
