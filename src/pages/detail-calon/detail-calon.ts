import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DetailCalonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-calon',
  templateUrl: 'detail-calon.html',
})
export class DetailCalonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailPermintaanPage');
  // }
  showConfirmTaaruf() {
    let confirm = this.alertCtrl.create({
      // TODO: X diganti sesuai nama dari permintaan ta`aruf
      title: 'Apakah Anda yakin ingin mengirim  permintaan Ta`aruf kepada X ?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Batal clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Ya clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  
}
