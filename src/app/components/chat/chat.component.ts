import { Component, OnInit } from '@angular/core';
import { chatService } from '../../services/chatService';
import { MessageDto } from '../../models/messageDto';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chatService:chatService) { }

  ngOnInit(): void {
    this.chatService.retrieveMappedMessage()
    .subscribe((received) =>{
      this.addToInbox(received);
    })
  }

  msg:MessageDto;
  msgInbox = [];

  addToInbox(obj){
    let newobj = {
      'userTo': obj.user,
      'message' : obj.message
    };
    this.msgInbox.push(newobj);
  }

  send(){
    if(this.msg){
      if(this.msg.UserTo.length == 0){
        window.alert("both fields are required")
      }
      else{
        this.chatService.sendMessage(this.msg);
      }
    }
  }

}
