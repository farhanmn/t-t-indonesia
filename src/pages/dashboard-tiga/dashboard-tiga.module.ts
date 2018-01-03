import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardTigaPage } from './dashboard-tiga';

@NgModule({
  declarations: [
    DashboardTigaPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardTigaPage),
  ],
})
export class DashboardTigaPageModule {}
