import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { Userservice } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  showLogin=false;
  authError:String='';
  constructor(private user: Userservice) {}

  ngOnInit(): void {
    this.user.reloadSeller()
  }
  signUp(data: signUp): void {
    console.warn(data);
    this.user.userSignUp(data);
  }
  login(data: signUp): void {
    this.user.userLogin(data);
    this.user.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }
  opennLogin(){
    this.showLogin=true
  }
  opennSignUp(){
    this.showLogin=false
  }
}