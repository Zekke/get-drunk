import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import {HomePage} from "../home/home";

/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
  providers: [PeopleServiceProvider]
})
export class FriendListPage {
  public people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleServiceProvider) {
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
      .then(data => {
        this.people = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }

}
