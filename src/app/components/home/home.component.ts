import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResult:string;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content){
    this.modalService.open(content).result.then((result)=>{
      this.closeResult = `Closed with: ${result}`;
    },(reason) =>{
      this.closeResult = `Dismissed with: ${this.getDismissedReason(reason)}`;
    })
  }

  private getDismissedReason(reason){
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing Escape';
    }
    else if(reason == ModalDismissReasons.BACKDROP_CLICK){
      return 'by clickingon the backdrop';
    }else{
      return `with: ${reason}`;
    }
  }
}
