import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/userService';

@Component({
  selector: 'app-register-pg2',
  templateUrl: './register-pg2.component.html',
  styleUrls: ['./register-pg2.component.css']
})
export class RegisterPg2Component implements OnInit {

  loading = false;
  isLoaded = false;
  usr:any;

  @Output() nextFunction: EventEmitter<any> = new EventEmitter()
  constructor(
    private router: Router,
    private userService: userService
  ) { }

  ngOnInit(): void {
    this.usr = JSON.parse(localStorage.getItem("user"));
    console.log(this.usr);
    
    if(this.usr){
      this.isLoaded = true;
    }
  }

  onNext(){
    //this.router.navigate(['/pg3'])
    this.nextFunction.emit("/pg3")
  }
  
  onPrev(){
    this.nextFunction.emit("/pg1")
  }

}
