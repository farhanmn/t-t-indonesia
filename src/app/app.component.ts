import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NotifikasiPage } from '../pages/notifikasi/notifikasi';
import { PercakapanPage } from '../pages/percakapan/percakapan';
import { DatapribadiPage } from '../pages/datapribadi/datapribadi';
import { DataCalonPage } from '../pages/data-calon/data-calon';
import { TataCaraPage } from '../pages/tata-cara/tata-cara';
import { FaqPage } from '../pages/faq/faq';
import { PengaturanPage } from '../pages/pengaturan/pengaturan';
import { KritikSaranPage } from '../pages/kritik-saran/kritik-saran';
import { DashboardSatuPage } from '../pages/dashboard-satu/dashboard-satu';
import { DashboardDuaPage } from '../pages/dashboard-dua/dashboard-dua';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Assalamu`alaikum \n Titi', component: HomePage },
      // { title: 'List', component: ListPage },      
      { title: 'Percakapan', component: PercakapanPage},
      { title: 'Notifikasi', component: NotifikasiPage},
      { title: 'Kritik & Saran', component: KritikSaranPage},
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Dashboard 1', component: DashboardSatuPage}, 
      { title: 'Dashboard Dua',component: DashboardDuaPage},     
      // TODO : Disable menu Data pribadi ketika Dashboard 1
      { title: 'Data Pribadi', component: DatapribadiPage},
      { title: 'Data Calon', component: DataCalonPage}, 
      { title: 'Tata Cara Ta`aruf', component: TataCaraPage},
      { title: 'FAQ', component: FaqPage},
      { title: 'Pengaturan', component: PengaturanPage}
      
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
