import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {LoginPageModule} from "../pages/login/login.module";
import {RecaptchaLoginModalPageModule} from "../pages/recaptcha-login-modal/recaptcha-login-modal.module";
import {VerifyPhoneNumberPageModule} from "../pages/verify-phone-number/verify-phone-number.module";

export const firebaseConfig = {
  apiKey: "AIzaSyDyqh5k3soFBhmL5SrJj3exRaPHIAUnZYk",
  authDomain: "ta-adud-dan-ta-aruf-indonesia.firebaseapp.com",
  databaseURL: "https://ta-adud-dan-ta-aruf-indonesia.firebaseio.com",
  storageBucket: "ta-adud-dan-ta-aruf-indonesia.appspot.com",
  messagingSenderId: '484953002710'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    RecaptchaLoginModalPageModule,
    VerifyPhoneNumberPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
