import { Component } from '@angular/core';
import {AlertController, MenuController, NavController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../login/login";
import {AngularFireDatabase} from "angularfire2/database";
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private phoneNumber;
  private user;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private afAuth: AngularFireAuth, private alertCtrl: AlertController, private afDB: AngularFireDatabase) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.navCtrl.setRoot(LoginPage);
        return;
      }
      this.phoneNumber = user.phoneNumber;
      this.user = user;
    });
  }

  ionViewDidEnter() {
    // close and disable the side menu.  I don't want them accessing this unless they're logged in.
    this.menuCtrl.close();
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeEnable(false);
  }

  test() {
    // User signed in successfully.
    let user = {'lastLogin': Date.now()};

    // TODO: Wah ini perlu diubah ya
    this.afDB.object('users/'+this.phoneNumber).update(user);
  }

  signOut() {
    let prompt = this.alertCtrl.create({
      title: 'Konfirmasi',
      message: 'Apakah anda yakin ingin log out?',
      buttons: [
        { text: 'Tidak',
          handler: data => { console.log('Cancel clicked'); }
        },
        { text: 'Ya',
          handler: data => {
            this.afAuth.auth.signOut();
          }
        }
      ]
    });
    prompt.present();
  }

}
