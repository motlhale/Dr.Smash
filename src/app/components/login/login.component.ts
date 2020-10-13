import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from '../../services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor( 
    private frmBuild:FormBuilder,
    private userService: userService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeFrom();
  }

  initializeFrom(){
    this.loginForm = this.frmBuild.group({
      id:'',
      email:''
    })
  }

  get f() { return this.loginForm.controls}

  onSubmit() {
    var status = false;
    this.userService.getUser(this.f.id.value).subscribe((data) =>{
      if(data.data.email == this.f.email.value){
        status = true;
      }
      localStorage.setItem("isLoggedIn",JSON.stringify(status));
      console.log("status",status);
    },(error) =>{
      localStorage.setItem("isLoggedIn",JSON.stringify(status));
    });
    
  }
}
