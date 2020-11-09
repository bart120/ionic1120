import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarkModel } from '../models/mark.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MarkService {
    constructor(private _http: HttpClient) { }

    getMarks(): Observable<Array<MarkModel>> {
        return this._http.get<Array<MarkModel>>(`${environment.urlAPI}marks`);
    }
}