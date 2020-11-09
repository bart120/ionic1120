import { Component, OnInit } from '@angular/core';
import { MarkModel } from '../models/mark.model';
import { MarkService } from '../services/mark.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  marks: Array<MarkModel>;
  constructor(private _servMark: MarkService) { }

  ngOnInit(): void {
    this._servMark.getMarks().subscribe(x => this.marks = x);
  }


}
