import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { userService } from '../../services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:any;
  loading:boolean = false;

  @Output() loginFunction:EventEmitter<any> = new EventEmitter()
  constructor( 
    private frmBuild:FormBuilder,
    private userService: userService) { }

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

  onLogin(){
    this.loading = true;
    if(this.loginForm.invalid){
      this.loading = false;
      return;
    }

    this.userService.getUser(this.f.id.value).subscribe(
      (data) =>{
        if(this.f.email.value == data.data.email){
          this.loading = false;
          this.user = JSON.stringify(data.data);
          localStorage.setItem('user',this.user);
          this.loginFunction.emit(this.user);
        }
        this.loading = false;
      }, (error) =>{
        this.loading = false;
      }
    )
  }
}
