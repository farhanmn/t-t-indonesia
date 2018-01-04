import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { KeluargaPage } from '../keluarga/keluarga';
import { PribadiPage } from '../pribadi/pribadi';

/**
 * Generated class for the DatapribadiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datapribadi',
  templateUrl: 'datapribadi.html',
})
export class DatapribadiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatapribadiPage');
  }

  presentModal() {
    let modal = this.modalCtrl.create(KeluargaPage);
    modal.present();
  }

  presentModalPribadi() {
    let modal = this.modalCtrl.create(PribadiPage);
    modal.present();
  }
}

