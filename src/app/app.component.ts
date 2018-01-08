import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SplashScreenPage } from "../pages/splash-screen/splash-screen";
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NotifikasiPage } from '../pages/notifikasi/notifikasi';
import { DatapribadiPage } from '../pages/datapribadi/datapribadi';
import { DataCalonPage } from '../pages/data-calon/data-calon';
import { TataCaraPage } from '../pages/tata-cara/tata-cara';
import { FaqPage } from '../pages/faq/faq';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { DashboardSatuPage } from '../pages/dashboard-satu/dashboard-satu';
import { DashboardDuaPage } from '../pages/dashboard-dua/dashboard-dua';
import { DashboardTigaPage } from '../pages/dashboard-tiga/dashboard-tiga';
import { JenisakunPage } from '../pages/jenisakun/jenisakun';
import {KritikSaranPage} from "../pages/kritik-saran/kritik-saran";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashScreenPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Assalamu`alaikum \n Titi', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Notifikasi', component: NotifikasiPage},
      { title: 'Kritik & Saran', component: KritikSaranPage},
      // { title: 'Kritik & Saran', component: KritikSaranPage},
      { title: 'Dashboard Wali', component: DashboardPage },
      { title: 'Dashboard 1', component: DashboardSatuPage},
      { title: 'Dashboard Dua',component: DashboardDuaPage},
      // TODO : Dashboard 3 tidak dapat melihat data calon
      { title: 'Dashboard Three', component: DashboardTigaPage},
      { title: 'Data Pribadi', component: DatapribadiPage},
      // { title: 'Chat', component: Chat},
      // TODO : Disable menu Data pribadi ketika Dashboard 1
      { title: 'Data Calon', component: DataCalonPage},
      { title: 'Tata Cara Ta`aruf', component: TataCaraPage},
      { title: 'FAQ', component: FaqPage},
      { title: 'Pengaturan', component: PengaturanPage},
      { title: 'Jenis akun', component: JenisakunPage}
      // { title: 'Chat', component: ChatPage}
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
