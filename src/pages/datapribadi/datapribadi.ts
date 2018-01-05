import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { KeluargaPage } from '../keluarga/keluarga';
import { PribadiPage } from '../pribadi/pribadi';
import { PribadiikhwanPage } from '../pribadiikhwan/pribadiikhwan';
import { KriteriapasanganPage } from '../kriteriapasangan/kriteriapasangan';
import { KajianPage } from '../kajian/kajian';

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
  keluarga = KeluargaPage;
  pribadiakhwat = PribadiPage;
  pribadiikhwan = PribadiikhwanPage;
  kriteria = KriteriapasanganPage;
  kajian = KajianPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatapribadiPage');
  }

}

