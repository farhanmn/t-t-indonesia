import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the KritikSaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kritik-saran',
  templateUrl: 'kritik-saran.html',
})
export class KritikSaranPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad KritikSaranPage');
  // }
  showConfirmKritik() {
    let prompt = this.alertCtrl.create({
      title: 'Kritik & Saran',
      message: "Apakah Anda yakin ingin mengirimkan kritik & saran tersebut ?",
      
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
