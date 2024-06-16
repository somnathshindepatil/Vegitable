import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Userservice {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)
    isUserLoggedIn: any;

  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signUp){
    this.http.post('http://localhost:3000/user',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      console.warn("sign  in")
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate([])
      }
    })
  } 
  reloadSeller(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigate([''])
    }
  }
  userLogin(data:login){
   this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    console.warn(result)
    if(result && result.body && result.body.length===1){
      this.isLoginError.emit(false)
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate([''])
      console.warn("user loged in")
    }else{
      console.warn("login failed");
      this.isLoginError.emit(true)
    }
   })
  }

}