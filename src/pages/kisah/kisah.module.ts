import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KisahPage } from './kisah';

@NgModule({
  declarations: [
    KisahPage,
  ],
  imports: [
    IonicPageModule.forChild(KisahPage),
  ],
})
export class KisahPageModule {}
