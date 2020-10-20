import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RegisterPg2Component } from '../register-pg2/register-pg2.component';
import { RegisterPg3Component } from '../register-pg3/register-pg3.component';
import { userService } from '../../services/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(LoginComponent,{static:false})
  private login:LoginComponent;

  @ViewChild(RegisterComponent,{static:false})
  private register:RegisterComponent

  @ViewChild(RegisterPg2Component, {static: false})
  private regPg2:RegisterPg2Component

  @ViewChild(RegisterPg3Component,{static: false})
  private regPg3: RegisterPg3Component

  loading = false;
  step1 = false;
  step2 = false;
  step3 = true;
  closeResult:string;

  constructor(
    private modalService: NgbModal,
    private router: Router) { 
      
    }

  ngOnInit(): void {
  }

  open(content){
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{
      this.closeResult = `Closed with: ${result}`;
    },(reason) =>{
      this.closeResult = `Dismissed with: ${this.getDismissedReason(reason)}`;
    });
  }

  private getDismissedReason(reason){
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing Escape';
    }
    else if(reason == ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on the backdrop';
    }else{
      return `with: ${reason}`;
    }
  }

  nextFunction(data){
    if(data == "/posts"){
      this.step2 = true;
      this.step3 = false;
    }
    if(data == "/pg3"){
      this.step2 = false;
      this.step1 = true;
    }
    if(data == "/pg1"){
      this.step3 = true;
      this.step2 = false;
    }
  }

  loginFunction(data){
    this.modalService.dismissAll("closed");
    this.router.navigate(['/menu']);
  }

  registerFunction(data){
    this.modalService.dismissAll("closed");
    this.router.navigate(['/menu']);
  }

}
