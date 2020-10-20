import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/userService';
import { postService } from '../../services/postService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:any;
  users:any;
  index:number;
  isLoggedIn:boolean = false;

  //userForm:FormGroup;
  constructor(
    private userService:userService,
    private postService:postService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.index = 1;
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user != null || this.user != undefined){
      this.isLoggedIn = true;
    }
    this.userService.getUsers(this.index).subscribe(
      (data) =>{
        this.users = data.data
      },(error) =>{

      }
    )
  }
  
  getUserPosts(index){
    this.postService.getUserPost(index).subscribe(
      (data) =>{
        localStorage.setItem("posts",JSON.stringify(data.data));
        this.router.navigate(['/posts'])
      },(error) =>{

      }
    )
  }

  prev(){
    this.index--;
    this.userService.getUsers(this.index).subscribe(
      (data) => {
        this.users = data.data;
      },(error) =>{

      }
    )
  }
  next(){
    this.index++;
    this.userService.getUsers(this.index).subscribe(
      (data) => {
        this.users = data.data;
      },(error) =>{

      }
    )
  }

}
