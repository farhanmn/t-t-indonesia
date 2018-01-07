import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PercakapanPage } from './percakapan';
import {ChatService} from "../../providers/chat-service";
import {EmojiPickerComponentModule} from "../../components/emoji-picker/emoji-picker.module";
import {EmojiProvider} from "../../providers/emoji";

@NgModule({
  declarations: [
    PercakapanPage
  ],
  imports: [
    EmojiPickerComponentModule,
    IonicPageModule.forChild(PercakapanPage),
  ],
  exports: [
    PercakapanPage
  ],
  providers:[
    ChatService,
    EmojiProvider
  ]
})
export class PercakapanPageModule {}

