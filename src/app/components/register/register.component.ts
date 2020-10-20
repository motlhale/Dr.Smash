import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading:boolean = false;
  @Output() registerFunction:EventEmitter<any> = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    //this.router.navigate(['/pg2']);
    //
    this.registerFunction.emit("registerd");
  }
}
