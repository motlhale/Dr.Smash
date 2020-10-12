import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor( private frmBuild:FormBuilder) { }

  ngOnInit(): void {
    this.initializeFrom();
  }

  initializeFrom(){
    this.loginForm = this.frmBuild.group({
      userName:'',
      password:''
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }
}
