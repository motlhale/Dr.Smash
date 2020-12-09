import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {  } from '@microsoft/signalr'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { userService } from './services/userService';
import { postService } from './services/postService';
import { chatService } from './services/chatService';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegisterPg2Component } from './components/register-pg2/register-pg2.component';
import { RegisterPg3Component } from './components/register-pg3/register-pg3.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    PostsComponent,
    RegisterPg2Component,
    RegisterPg3Component,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    userService,
    postService,
    chatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
