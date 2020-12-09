import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RegisterPg2Component } from '../register-pg2/register-pg2.component';
import { RegisterPg3Component } from '../register-pg3/register-pg3.component';
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
  theme = "flex-container";
  text:string ="Hi";
  closeResult:string;
  fakecalender =[];

  constructor(
    private modalService: NgbModal,
    private router: Router) { 
    }

  ngOnInit(): void {
    this.generateCalenderView();
  }

  changeText(){
    if(this.text == "Hi"){
      this.text = "Changed";
      this.theme = "flex-container-new";
    }
    else{
      this.text = "Hi";
      this.theme = "flex-container";
    }
  }
  generateCalenderView(){
    var s = new Date();
    for (let index = -12; index < 15 ; index ++) {
      var tasks = [];
      var myRandom = Math.floor(Math.random()*(7-3)+2)

      for(let i = 1; i <+ myRandom; i++){
        tasks.push(`task ${i}, scheduled for today`)
      }

      var date = {
        'day' : s.getDate() + index,
        'month': s.toLocaleDateString('en-us',{month:'long'}),
        'year': s.getFullYear(),
        'tasks': tasks 
      };

      this.fakecalender.push(date);
    }
  }

  open(content){
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title',centered: true}).result.then((result)=>{
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
