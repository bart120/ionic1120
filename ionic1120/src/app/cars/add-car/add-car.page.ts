import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { MarkModel } from 'src/app/models/mark.model';
import { CarService } from 'src/app/services/car.service';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  formCar: FormGroup;
  $marks: Observable<Array<MarkModel>>;
  constructor(private _servMark: MarkService,
    private _alertController: AlertController,
    private _servCar: CarService,
    private _router: Router) { }


  ngOnInit() {
    this.$marks = this._servMark.getMarks();
    this.formCar = new FormGroup({
      model: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      dateOfCirculation: new FormControl('', [Validators.required]),
      markID: new FormControl('', [Validators.required]),
    });
  }

  async onSave() {
    if (this.formCar.valid) {
      this._servCar.addCar(this.formCar.value as CarModel).subscribe(x => {
        this._router.navigate(['/tabs/tab2']);
      });
    } else {
      const alert = await this._alertController.create({
        header: 'Attention',
        message: `Le formulaire n'est pas valide`,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
