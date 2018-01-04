import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DetailPermintaanPage } from '../detail-permintaan/detail-permintaan';


@Component({
  selector: 'page-home',
  templateUrl: 'notifikasi.html'
})
export class NotifikasiPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  presentModal() {
    let modal = this.modalCtrl.create(DetailPermintaanPage);
    
    modal.present();
  }

}