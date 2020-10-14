import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(LoginComponent,{static:false})
  private toLogin: LoginComponent;
  loading = false;
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

  onLogin(content){
    if(this.toLogin == null || this.toLogin == undefined){
      this.toLogin = content;
    }

    var status = this.toLogin.onSubmit();
    console.log('calling from home component',status)
    if(this.toLogin.status){
      this.modalService.dismissAll("successful login")
    }
  }
}
