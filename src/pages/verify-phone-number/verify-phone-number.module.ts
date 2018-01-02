import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyPhoneNumberPage } from './verify-phone-number';

@NgModule({
  declarations: [
    VerifyPhoneNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(VerifyPhoneNumberPage),
  ],
})
export class VerifyPhoneNumberPageModule {}
