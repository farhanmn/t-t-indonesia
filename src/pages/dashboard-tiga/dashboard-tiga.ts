import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KritikSaranPage } from '../kritik-saran/kritik-saran';
import { TestimoniPage } from '../testimoni/testimoni';
import { KisahPage } from '../kisah/kisah';

/**
 * Generated class for the DashboardTigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-tiga',
  templateUrl: 'dashboard-tiga.html',
})
export class DashboardTigaPage {
  kritikSaranPage = KritikSaranPage;
  testimoniPage = TestimoniPage;
  kisahPage = KisahPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

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

  showTesti() {
    let prompt = this.alertCtrl.create({
      title: 'Alasan',
      message: "Mohon tuliskan testimoni dari aplikasi ini",
      inputs: [
        {
          name: 'testimoni',
          placeholder: 'testimoni proses ta`aruf'
        },{
          name: 'kritik & saran',
          placeholder: 'kritik & saran untuk T&T'
        }
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

  


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DashboardTigaPage');
  // }

}
