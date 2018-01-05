import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailCalonPage } from '../detail-calon/detail-calon';
// import {  } from 'ionic-angular';

/**
 * Generated class for the DataCalonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-calon',
  templateUrl: 'data-calon.html',
})
export class DataCalonPage {
  detailCalonPage = DetailCalonPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  // presentModal() {
  //   let modal = this.modalCtrl.create(DetailCalonPage);
    
  //   modal.present();
  // }

}
