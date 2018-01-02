import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecaptchaLoginModalPage } from './recaptcha-login-modal';

@NgModule({
  declarations: [
    RecaptchaLoginModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RecaptchaLoginModalPage),
  ],
})
export class RecaptchaLoginModalPageModule {}
