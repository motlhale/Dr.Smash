import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
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

  loginFunction(data){
    this.modalService.dismissAll("closed");
    this.router.navigate(['/menu']);
  }

  registerFunction(data){
    this.modalService.dismissAll("closed");
    this.router.navigate(['/menu']);
  }

}
