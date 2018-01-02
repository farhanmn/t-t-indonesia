import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DashboardDuaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-dua',
  templateUrl: 'dashboard-dua.html',
})
export class DashboardDuaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  // alert konfirmasi lanjut ta'aruf
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Apakah Anda yakin ingin melanjutkan ?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Yakin',
          handler: () => {
            console.log('Yakin clicked');
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
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Alasan',
      message: "Mohon tuliskan dengan jujur alasan memilih mundur dari ta`aruf",
      inputs: [
        {
          name: 'alasan',
          placeholder: 'alasan mundur dari ta`aruf'
        },
      ],
      buttons: [
        {
          text: 'Batal',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Simpan',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DashboardDuaPage');
  // }

// }
