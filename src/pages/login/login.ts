import { Component } from '@angular/core';
import {IonicPage, MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import ApplicationVerifier = firebase.auth.ApplicationVerifier;
import {RecaptchaLoginModalPage} from "../recaptcha-login-modal/recaptcha-login-modal";
import {HomePage} from "../home/home";
import {JenisakunPage} from "../jenisakun/jenisakun";
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private phoneNumber: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, private modalCtrl: ModalController, private afAuth: AngularFireAuth, private afDB: AngularFireDatabase) {

  }

  ionViewDidEnter() {
    // close and disable the side menu.  I don't want them accessing this unless they're logged in.
    this.menuCtrl.close();
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }

  presentRecaptchaModal() {
    let profileModal = this.modalCtrl.create(RecaptchaLoginModalPage, { phoneNumber: this.phoneNumber });
    profileModal.present();
  }

}
