import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../helper/appSettings';
import * as signalR from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class chatService {
    private connection:any = new signalR.HubConnectionBuilder().withUrl(`${AppSettings.ChatURL}/chatsocket`)
    .configureLogging(signalR.LogLevel.Error)
    .build();

    private sharedObj = new Subject<any>()

    constructor(private httpClient:HttpClient){
        this.connection.onclose( async () => {
            await this.start()
        });
        this.connection.on("RecieveOne",(user,message) =>{ this.mapRecivedMessage(user,message)});
        this.start();
    }

    public async start() {
        try {
          await this.connection.start();
          console.log("connected");
        } catch (err) {
          console.log(err);
          setTimeout(() => this.start(), 5000);
        } 
      }

      private mapRecivedMessage(user, message){
          var obj ={
              'userTo': user,
              'message' : message
          };

          this.sharedObj.next(obj);
      }

    sendMessage(message){
        this.httpClient.post<any>(`${AppSettings.ChatURL}/api/send`,message)
        .pipe( map( (response) =>{return response})) 
    }
}