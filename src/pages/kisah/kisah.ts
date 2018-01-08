import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the KisahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kisah',
  templateUrl: 'kisah.html',
})
export class KisahPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad KisahPage');
  // }
  saveConfirmKisah() {
    let prompt = this.alertCtrl.create({
      title: 'Kisah Ta`aruf',
      message: "Apakah Anda yakin ingin menyimpan kisah ta`aruf tersebut ?",
      
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

  sendConfirmKisah() {
    let prompt = this.alertCtrl.create({
      title: 'Kisah Ta`aruf',
      message: "Apakah Anda yakin ingin mengirim kisah ta`aruf tersebut ?",
      
      buttons: [
        {
          text: 'Batal',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Kirim',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}
