import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarPage } from './add-car/add-car.page';
import { ListCarPage } from './list-car/list-car.page';


const routes: Routes = [
  {
    path: '',
    component: ListCarPage,
  },
  {
    path: 'add',
    //loadChildren: () => import('./add-car/add-car.module').then(m => m.AddCarPageModule)
    component: AddCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule { }
