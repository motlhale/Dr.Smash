import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading:boolean = false;
  @Output() registerFunction:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onRegister(){
    this.registerFunction.emit("registerd");
  }
}
