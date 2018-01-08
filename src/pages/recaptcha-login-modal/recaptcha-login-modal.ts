import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the RecaptchaLoginModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recaptcha-login-modal',
  templateUrl: 'recaptcha-login-modal.html',
})
export class RecaptchaLoginModalPage {

  public phoneNumber: any;
  private appVerifier: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private alertCtrl: AlertController, private viewCtrl: ViewController, private afDB: AngularFireDatabase) {
    this.phoneNumber = navParams.get('phoneNumber');
  }

  ionViewDidEnter() {
    // Summon reCAPTCHA v2
    this.appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    this.afAuth.auth
      .signInWithPhoneNumber(this.phoneNumber, this.appVerifier)
      .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.viewCtrl.dismiss().then(() => {
          let prompt = this.alertCtrl.create({
            title: 'Enter the Confirmation code',
            inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
            buttons: [
              { text: 'Cancel',
                handler: data => { console.log('Cancel clicked'); }
              },
              { text: 'Send',
                handler: data => {
                  confirmationResult.confirm(data.confirmationCode)
                    .then(function (result) {
                      // User signed in successfully.
                      let user = {'no_hp': this.phoneNumber};

                      // TODO: Wah ini perlu diubah ya
                      this.afDB.list('users/'+this.phoneNumber).push(user);
                      console.log(result.user);
                    }).catch(function (error) {
                    // User couldn't sign in (bad verification code?)
                  });
                }
              }
            ]
          });
          prompt.present();
        });
      }).catch(function (error) {
      // Error; SMS not sent
      console.log(error);
      // ...
    });
  }

}
