import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NotifikasiPage } from '../pages/notifikasi/notifikasi';
import { PercakapanPage } from '../pages/percakapan/percakapan';
import { DataCalonPage } from '../pages/data-calon/data-calon';
import { TataCaraPage } from '../pages/tata-cara/tata-cara';
import { FaqPage } from '../pages/faq/faq';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { KritikSaranPage } from '../pages/kritik-saran/kritik-saran';
import { DatapribadiPage } from '../pages/datapribadi/datapribadi';
import { DashboardSatuPage } from '../pages/dashboard-satu/dashboard-satu';
import { DashboardDuaPage } from '../pages/dashboard-dua/dashboard-dua';
import { DashboardTigaPage } from '../pages/dashboard-tiga/dashboard-tiga';
import { DetailPermintaanPage } from '../pages/detail-permintaan/detail-permintaan';
import { DetailPermintaanPageModule } from '../pages/detail-permintaan/detail-permintaan.module';
// import { ChatPage } from '../pages/chat/chat';
// import { EmojiProvider } from '../providers/emoji';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {LoginPageModule} from "../pages/login/login.module";
import {RecaptchaLoginModalPageModule} from "../pages/recaptcha-login-modal/recaptcha-login-modal.module";
import {VerifyPhoneNumberPageModule} from "../pages/verify-phone-number/verify-phone-number.module";
import {SplashScreenPageModule} from "../pages/splash-screen/splash-screen.module";

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
    // ListPage,
    DashboardPage,
    NotifikasiPage,
    PercakapanPage,
    DataCalonPage,
    TataCaraPage,
    DatapribadiPage,
    FaqPage,
    PengaturanPage,
    KritikSaranPage,
    DashboardSatuPage,
    DashboardDuaPage,
    DashboardTigaPage
    // ChatPage
  ],
  imports: [
    BrowserModule,
    DetailPermintaanPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    RecaptchaLoginModalPageModule,
    VerifyPhoneNumberPageModule,
    SplashScreenPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ListPage,
    DashboardPage,
    NotifikasiPage,
    PercakapanPage,
    DataCalonPage,
    DatapribadiPage,
    TataCaraPage,
    FaqPage,
    PengaturanPage,
    KritikSaranPage,
    DashboardSatuPage,
    DashboardDuaPage,
    DashboardTigaPage
    // ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
