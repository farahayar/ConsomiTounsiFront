import { Injectable } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';
import { Chat } from '../models/chat';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  API_URL: String = environment.API_URL;

  stompClient: any;
  userId: any = 5;
  subject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  initializeWebSocketConnection(userId) {
    const ws = new SockJS(this.API_URL + "/socket");
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, frame => {
      that.openChat(userId);
    }, err => {
      console.log(err);
    });
  }

  openChat(userId) {
    this.stompClient.subscribe(`/chat/${userId}`, (res) => {
      this.sendMessage(JSON.parse(res.body))
    });

  }

  sendMessage(message: any) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  publishMessage(chat: Chat): any {
    return this.httpClient.post<any>(`${this.API_URL}/chatsController/sendMessage`, chat);
  }

  getMessageWithAdmin(userId): any {
    return this.httpClient.get<any>(`${this.API_URL}/chatsController/getMessageWithAdmin/${userId}`);
  }

  getAdminListChat(): any {
    return this.httpClient.get<any>(`${this.API_URL}/chatsController/getAdminListChat`);
  }

}
