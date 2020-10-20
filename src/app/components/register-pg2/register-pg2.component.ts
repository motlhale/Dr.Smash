import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pg2',
  templateUrl: './register-pg2.component.html',
  styleUrls: ['./register-pg2.component.css']
})
export class RegisterPg2Component implements OnInit {

  loading = false;

  @Output() nextFunction: EventEmitter<any> = new EventEmitter()
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNext(){
    //this.router.navigate(['/pg3'])
    this.nextFunction.emit("/pg3")
  }
  
  onPrev(){
    this.nextFunction.emit("/pg1")
  }

}
