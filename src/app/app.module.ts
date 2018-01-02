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
    DashboardSatuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    DashboardSatuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
