import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  androidPermissions: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.permitir();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  permitir() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA
      )
    );
    this.androidPermissions.checkPermission(this.androidPermissions.LOCATION_HARDWARE)
      .then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(
          this.androidPermissions.PERMISSION.LOCATION_HARDWARE)
      );
  }
}
