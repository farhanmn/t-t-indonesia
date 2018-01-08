import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NotifikasiPage } from '../pages/notifikasi/notifikasi';
import { DataCalonPage } from '../pages/data-calon/data-calon';
import { TataCaraPage } from '../pages/tata-cara/tata-cara';
import { FaqPage } from '../pages/faq/faq';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { KritikSaranPage } from '../pages/kritik-saran/kritik-saran';
import { DatapribadiPage } from '../pages/datapribadi/datapribadi';
import { DashboardSatuPage } from '../pages/dashboard-satu/dashboard-satu';
import { DashboardDuaPage } from '../pages/dashboard-dua/dashboard-dua';
import { DashboardTigaPage } from '../pages/dashboard-tiga/dashboard-tiga';
import { KeluargaPageModule } from '../pages/keluarga/keluarga.module';
import { PribadiPageModule } from '../pages/pribadi/pribadi.module';
import { PribadiikhwanPageModule } from '../pages/pribadiikhwan/pribadiikhwan.module';
import { KriteriapasanganPageModule } from '../pages/kriteriapasangan/kriteriapasangan.module';
import { KajianPageModule } from '../pages/kajian/kajian.module';
import { DashboardTigaPageModule } from '../pages/dashboard-tiga/dashboard-tiga.module';
import { DashboardDuaPageModule } from '../pages/dashboard-dua/dashboard-dua.module';
import { DashboardSatuPageModule } from '../pages/dashboard-satu/dashboard-satu.module';
import { KritikSaranPageModule } from '../pages/kritik-saran/kritik-saran.module';
import { PengaturanPageModule } from '../pages/pengaturan/pengaturan.module';
import { FaqPageModule } from '../pages/faq/faq.module';
import { TataCaraPageModule } from '../pages/tata-cara/tata-cara.module';
import { DatapribadiPageModule } from '../pages/datapribadi/datapribadi.module';
import { DataCalonPageModule } from '../pages/data-calon/data-calon.module';
import { NotifikasiPageModule } from '../pages/notifikasi/notifikasi.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { DetailCalonPageModule } from '../pages/detail-calon/detail-calon.module';
import { NadzorPageModule } from '../pages/nadzor/nadzor.module';
import { TestimoniPageModule } from '../pages/testimoni/testimoni.module';
import { KisahPageModule } from '../pages/kisah/kisah.module';
import { KhitbahPageModule } from '../pages/khitbah/khitbah.module';
import { AkadPageModule } from '../pages/akad/akad.module';
import { WalimahPageModule } from '../pages/walimah/walimah.module';
import { JenisakunPageModule } from "../pages/jenisakun/jenisakun.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {LoginPageModule} from "../pages/login/login.module";
import {RecaptchaLoginModalPageModule} from "../pages/recaptcha-login-modal/recaptcha-login-modal.module";
import {VerifyPhoneNumberPageModule} from "../pages/verify-phone-number/verify-phone-number.module";
import {SplashScreenPageModule} from "../pages/splash-screen/splash-screen.module";
import {ChatPageModule} from "../pages/chat/chat.module";
import {HttpModule} from "@angular/http";
import { UserProvider } from '../providers/user/user';
import {DetailPermintaanPageModule} from "../pages/detail-permintaan/detail-permintaan.module";

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
  ],
  imports: [
    BrowserModule,
    DetailPermintaanPageModule,
    PribadiPageModule,
    PribadiikhwanPageModule,
    KeluargaPageModule,
    KriteriapasanganPageModule,
    KajianPageModule,
    DetailCalonPageModule,
    DashboardPageModule,
    NotifikasiPageModule,
    DataCalonPageModule,
    DatapribadiPageModule,
    TataCaraPageModule,
    FaqPageModule,
    PengaturanPageModule,
    KritikSaranPageModule,
    DashboardSatuPageModule,
    DashboardDuaPageModule,
    DashboardTigaPageModule,
    KritikSaranPageModule,
    TestimoniPageModule,
    KisahPageModule,
    NadzorPageModule,
    KhitbahPageModule,
    AkadPageModule,
    WalimahPageModule,
    JenisakunPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    RecaptchaLoginModalPageModule,
    VerifyPhoneNumberPageModule,
    SplashScreenPageModule,
    ChatPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
