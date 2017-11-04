import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { FriendListPage } from "../friend-list/friend-list";

declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  end = 'Choisis un bar';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  testNav(){
    this.navCtrl.push(FriendListPage);
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {


    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


      let mapOption = {
        center: latLng,
        zoom: 15
        //mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
      this.directionsDisplay.setMap(this.map);

    }, (err) => {
      console.log(err);
    });
  }

  calculateAndDisplayRoute() {

    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.directionsService.route({
        origin: latLng,
        destination: this.end,
        travelMode: 'BICYCLING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    }, (err) => {
      console.log(err);
    });
  }
}
