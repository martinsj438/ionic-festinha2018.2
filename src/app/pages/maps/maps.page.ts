import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  
    lat:number
    lng:number
  

  constructor(
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
  }

  posLocal(){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.lat  = resp.coords.latitude;
    this.lng = resp.coords.longitude;
    console.log(this.lat, " ", this.lng);
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }

  posAtual() {
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
   });
}
}
