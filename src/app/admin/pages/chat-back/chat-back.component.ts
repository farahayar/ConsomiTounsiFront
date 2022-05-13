import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-back',
  templateUrl: './chat-back.component.html',
  styleUrls: ['./chat-back.component.scss']
})
export class ChatBackComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  listSender: any = [];
  currentChat: any = {};
  messageInput: string;
  searchInput: string = "";
  
  chats: any = [];
  //TODO change me
  userId = 2;


  ngOnInit(): void {
    this.chatService.getAdminListChat().subscribe(
      (res: any) => {
        this.chats = res;
        this.listSender = res;
        if (res.length)
          this.initCurrentChat(res[0])
      },
      err => {
        console.log(err)
      }
    )

    this.chatService.initializeWebSocketConnection(this.userId);
    this.chatService.onMessage().subscribe((newMsg: any) => { 
      
      // TODO notification
      if (newMsg.reciver.userid == this.userId)
        this.playAudio();
      const isExist = this.listSender.filter(elem => elem.sender.userid == newMsg.sender.userid)
      if (!isExist.length && newMsg.sender.userid != this.userId){
        newMsg.new=1;
        this.listSender.push(newMsg);
      }
      else if (this.currentChat.user.userid == newMsg.sender.userid || newMsg.sender.userid == this.userId)
      this.currentChat.messages.push(newMsg)
      else if (newMsg.sender.userid != this.userId){
        isExist[0].new = (isNaN(isExist[0].new) ? 0 :isExist[0].new )+1;
      }
    })
  }

  initCurrentChat(item: any) {
    const sender = item.sender;
    item.new = 0;
    this.currentChat.user = sender;
    this.chatService.getMessageWithAdmin(sender.userid).subscribe(
      res => {
        console.log(res," ************")
        this.currentChat.messages = res;
      },
      err => { console.log(err) }
    )
  }


  onSend() {
    let chat = new Chat(new User(this.userId,""), new User(this.currentChat.user.userid,""), this.messageInput, new Date());
    this.messageInput = "";
    this.chatService.publishMessage(chat).subscribe((res: any) => {
    })
    this.chatService.sendMessage(chat);
  }

  onSearchChange(){
    if(this.searchInput.length)
      this.listSender = this.chats.filter(elem=>elem.sender.fname.toLowerCase().includes(this.searchInput.toLowerCase()))
    else
      this.listSender = this.chats;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/message.mp3";
    audio.load();
    audio.play();
  }

}
