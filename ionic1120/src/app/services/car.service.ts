import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CarService {
    constructor(private _http: HttpClient) { }

    getCars(): Observable<Array<CarModel>> {
        return this._http.get<Array<CarModel>>(`${environment.urlAPI}cars`);
    }

    addCar(car: CarModel): Observable<CarModel> {
        return this._http.post<CarModel>(`${environment.urlAPI}cars`, car);
    }
}