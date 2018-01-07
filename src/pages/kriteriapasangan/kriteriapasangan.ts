import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KriteriapasanganPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kriteriapasangan',
  templateUrl: 'kriteriapasangan.html',
})
export class KriteriapasanganPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KriteriapasanganPage');
  }

  myDate: String = new Date().toISOString();
  // public date: string = new Date().toISOString();
}
