import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat.service';

import * as $ from "jquery";
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  userId: any = 5;
  messages: any[] = [];
  messageInput: string;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.initializeWebSocketConnection();
    this.initChatJquery()
    this.chatService.onMessage().subscribe((newMsg: any) => {
      if (newMsg.sender != this.userId)
        this.playAudio()
      this.messages.push(newMsg)
    })
  }

  onSend() {
    console.log(this.messageInput)
    let chat = new Chat(new User(this.userId),new User(5), this.messageInput, new Date());
    this.messageInput = "";
    console.log(chat)
    this.chatService.publishMessage(chat).subscribe((res: any) => {
    })
    this.chatService.sendMessage(chat);
  }

  initChatJquery() {
    $(function () {
      const scale: any = "scale"

      $("#chat-circle").click(function () {
        $("#chat-circle").toggle(scale);
        $(".chat-box").toggle(scale);
      })

      $(".chat-box-toggle").click(function () {
        $("#chat-circle").toggle(scale);
        $(".chat-box").toggle(scale);
      })

    })
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/message.mp3";
    audio.load();
    audio.play();
  }

}
