import { Component, OnInit } from '@angular/core';
import { postService } from '../../services/postService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  index:number;
  posts:any;

  constructor(
    private postService: postService,
    private router: Router) { }

  ngOnInit(): void {
    this.index = 1;
    if(localStorage.getItem("posts") != null || localStorage.getItem("posts") != undefined){
      this.posts = JSON.parse(localStorage.getItem("posts"))
    } else{
      this.postService.getPosts().subscribe(
        (data) =>{
          this.posts = data.data;
        }, (error) =>{
  
        }
      )
    }
  }

  prev(){
    this.index--;
  }

  next(){
    this.index++;
  }

  onHome(){
    this.router.navigate(["/"]);
  }
}
