import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private appVerifier;
  private recaptchaWidgetId;
  private confirmationResult;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.appVerifier.render().then(function(widgetId) {
      this.recaptchaWidgetId = widgetId;
    });
  }

  signInWithPhoneNumber() {
    this.afAuth.auth
      .signInWithPhoneNumber('+6287889022592', this.appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
      }).catch(function (error) {
      // Error; SMS not sent
      // ...
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
