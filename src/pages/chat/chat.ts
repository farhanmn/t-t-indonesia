import {Component, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Events, Content, TextInput} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../login/login";
import {Observable} from "rxjs/Observable";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;

  groupEntity: any;
  messageList: Array<any>;
  editorMsg = '';
  showEmojiPicker = false;
  private phoneNumber: string | null;
  private user: any;

  constructor(navParams: NavParams,
              private navCtrl: NavController,
              private events: Events,
              public afDB: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.navCtrl.setRoot(LoginPage);
        return;
      }
      this.phoneNumber = user.phoneNumber;
      this.user = user;
    });
    this.getGroupEntity();
    this.scrollToBottom();
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.messageInput.setFocus();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  /**
   * @name getMsg
   */
  private getGroupEntity() {
    // Get mock message list
    this.afDB.object('chats/0').valueChanges().subscribe(room => {
      this.groupEntity = room;
      console.log(this.groupEntity);
    });
    this.afDB.list('chats/0/messages').valueChanges().subscribe(message => {
      this.messageList = message;
      console.log(this.messageList);

      this.scrollToBottom();
    });
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
      if (!this.editorMsg.trim()) return;

      // Mock message
      const id = Date.now().toString();
      let newMsg= {
          from: this.phoneNumber,
          timestamp: Date.now(),
          message: this.editorMsg,
      };

      this.afDB.list('chats/0/messages').push(newMsg);
      this.editorMsg = '';

      if (!this.showEmojiPicker) {
          this.messageInput.setFocus();
      }

      this.scrollToBottom();
  }
  //
  // /**
  //  * @name pushNewMsg
  //  * @param msg
  //  */
  // pushNewMsg(msg: ChatMessage) {
  //     const userId = this.user.id,
  //           toUserId = this.toUser.id;
  //     // Verify user relationships
  //     if (msg.userId === userId && msg.toUserId === toUserId) {
  //         this.msgList.push(msg);
  //     } else if (msg.toUserId === userId && msg.userId === toUserId) {
  //         this.msgList.push(msg);
  //     }
  //     this.scrollToBottom();
  // }
  //
  // getMsgIndexById(id: string) {
  //     return this.msgList.findIndex(e => e.messageId === id)
  // }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
}
