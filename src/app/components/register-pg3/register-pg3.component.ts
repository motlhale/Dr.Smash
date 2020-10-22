import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { userService } from '../../services/userService';

@Component({
  selector: 'app-register-pg3',
  templateUrl: './register-pg3.component.html',
  styleUrls: ['./register-pg3.component.css']
})
export class RegisterPg3Component implements OnInit {

  loading = false;
  isLoaded = false;
  usr:any;
  
  @Output() nextFunction:EventEmitter<any> = new EventEmitter()
  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.userService.getUsers(1).subscribe((data) =>{
      this.usr = data.data[0];
      localStorage.setItem("user",JSON.stringify(this.usr));
      this.isLoaded = true;
    },(error) =>{

    });
  }

  onNext(){
    this.nextFunction.emit("/posts")
  }

}
