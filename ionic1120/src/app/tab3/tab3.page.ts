import { Component, OnInit } from '@angular/core';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

const { Camera } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  base64Image;
  constructor() { }

  async ngOnInit() {

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.base64Image = image;
  }

}
