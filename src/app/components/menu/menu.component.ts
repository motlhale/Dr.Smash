import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/userService';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:any
  userForm:FormGroup;
  constructor(
    private userService:userService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) =>{
        this.user = data.data
      },(error) =>{

      }
    )
  }

}
