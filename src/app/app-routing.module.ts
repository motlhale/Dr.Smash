import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegisterPg2Component } from './components/register-pg2/register-pg2.component';
import { RegisterPg3Component } from './components/register-pg3/register-pg3.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'posts',component: PostsComponent},
  { path: 'pg2', component: RegisterPg2Component},
  { path: 'pg3', component: RegisterPg3Component},
  { path: 'chat', component: ChatComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
