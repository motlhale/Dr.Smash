import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-pg3',
  templateUrl: './register-pg3.component.html',
  styleUrls: ['./register-pg3.component.css']
})
export class RegisterPg3Component implements OnInit {

  loading = false;
  
  @Output() nextFunction:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onNext(){
    this.nextFunction.emit("/posts")
  }

}
