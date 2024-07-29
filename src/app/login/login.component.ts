import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as userList from '../../userList.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userdata = {
    email:"",
    password:""
  }
  constructor(private route:Router){}
userDetails: any = userList
onLogin(){
  // console.log(`user details--${this.userdata.email} ${this.userdata.password}`)
  localStorage.setItem('email',this.userdata.email)
  localStorage.setItem('password', this.userdata.password)
  this.route.navigate(["/products"]);
} 
ngOnInit(){
//  ./ this.userDetails.forEach((element: any) => {
    console.log(this.userDetails);
  // });
}

onCacel(){
  this.route.navigate(["/home"])
}
onSignUp(){
  this.route.navigate(["/register"])
}
}
