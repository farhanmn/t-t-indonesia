import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NadzorPage } from './nadzor';

@NgModule({
  declarations: [
    NadzorPage,
  ],
  imports: [
    IonicPageModule.forChild(NadzorPage),
  ],
})
export class NadzorPageModule {}
