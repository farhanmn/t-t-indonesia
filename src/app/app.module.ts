import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { DashboardPage } from '../pages/dashboard/dashboard';
// import { NotifikasiPage } from '../pages/notifikasi/notifikasi';
// import { PercakapanPage } from '../pages/percakapan/percakapan';
// import { DataCalonPage } from '../pages/data-calon/data-calon';
// import { TataCaraPage } from '../pages/tata-cara/tata-cara';
// import { FaqPage } from '../pages/faq/faq';
// import { PengaturanPage } from '../pages/pengaturan/pengaturan';
// import { KritikSaranPage } from '../pages/kritik-saran/kritik-saran';
// import { DatapribadiPage } from '../pages/datapribadi/datapribadi';
// import { DashboardSatuPage } from '../pages/dashboard-satu/dashboard-satu';
// import { DashboardDuaPage } from '../pages/dashboard-dua/dashboard-dua';
// import { DashboardTigaPage } from '../pages/dashboard-tiga/dashboard-tiga';
// import { DetailPermintaanPage } from '../pages/detail-permintaan/detail-permintaan';
import { DetailPermintaanPageModule } from '../pages/detail-permintaan/detail-permintaan.module';
import { DashboardTigaPageModule } from '../pages/dashboard-tiga/dashboard-tiga.module';
import { DashboardDuaPageModule } from '../pages/dashboard-dua/dashboard-dua.module';
import { DashboardSatuPageModule } from '../pages/dashboard-satu/dashboard-satu.module';
import { KritikSaranPageModule } from '../pages/kritik-saran/kritik-saran.module';
import { PengaturanPageModule } from '../pages/pengaturan/pengaturan.module';
import { FaqPageModule } from '../pages/faq/faq.module';
import { TataCaraPageModule } from '../pages/tata-cara/tata-cara.module';
import { DatapribadiPageModule } from '../pages/datapribadi/datapribadi.module';
import { DataCalonPageModule } from '../pages/data-calon/data-calon.module';
import { PercakapanPageModule } from '../pages/percakapan/percakapan.module';
import { NotifikasiPageModule } from '../pages/notifikasi/notifikasi.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { DetailCalonPageModule } from '../pages/detail-calon/detail-calon.module';
// import { ChatPage } from '../pages/chat/chat';
// import { EmojiProvider } from '../providers/emoji';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ListPage,
    // DashboardPage,
    // NotifikasiPage,
    // PercakapanPage,
    // DataCalonPage,
    // TataCaraPage,
    // DatapribadiPage,
    // FaqPage,
    // PengaturanPage,
    // KritikSaranPage,
    // DashboardSatuPage,
    // DashboardDuaPage,
    // DashboardTigaPage
    // ChatPage
  ],
  imports: [
    BrowserModule,
    DetailPermintaanPageModule,
    DetailCalonPageModule,
    DashboardPageModule,
    NotifikasiPageModule,
    PercakapanPageModule,
    DataCalonPageModule,
    DatapribadiPageModule,
    TataCaraPageModule,
    FaqPageModule,
    PengaturanPageModule,
    KritikSaranPageModule,
    DashboardSatuPageModule,
    DashboardDuaPageModule,
    DashboardTigaPageModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    // ListPage,
    
    // ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // EmojiProvider
  ]
})
export class AppModule {}
