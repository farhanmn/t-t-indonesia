import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KajianPage } from './kajian';

@NgModule({
  declarations: [
    KajianPage,
  ],
  imports: [
    IonicPageModule.forChild(KajianPage),
  ],
})
export class KajianPageModule {}
