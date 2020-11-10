import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { AddCarPage } from './add-car/add-car.page';
import { ListCarPage } from './list-car/list-car.page';
import { CarService } from '../services/car.service';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [
    ListCarPage,
    AddCarPage
  ],
  providers: [
    CarService
    //{provide: CarService, useClass: environment.production? CarService : MockCarService}
  ]
})
export class Tab2PageModule { }
