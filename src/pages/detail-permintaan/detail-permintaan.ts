import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DetailPermintaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-permintaan',
  templateUrl: 'detail-permintaan.html',
})
export class DetailPermintaanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailPermintaanPage');
  // }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      // TODO: X diganti sesuai nama dari permintaan ta`aruf
      title: 'Apakah Anda yakin ingin menerima permintaan Ta`aruf dari X ?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Terima',
          handler: () => {
            console.log('Terima clicked');
          }
        },
        {
          text: 'Batal',
          handler: () => {
            console.log('Batal clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  // alert mundur ta'aruf
  showCancel() {
    let prompt = this.alertCtrl.create({
      // TODO: X diganti sesuai nama dari permintaan ta`aruf
      title: 'Apakah Anda yakin ingin menolak permintaan Ta`aruf dari X ?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Tolak',
          handler: () => {
            console.log('Tolak clicked');
          }
        },
        {
          text: 'Batal',
          handler: () => {
            console.log('Batal clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
