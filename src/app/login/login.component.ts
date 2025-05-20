import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  visible:boolean=false;
  constructor(private _loginService:LoginService,public _router:Router){}
  data:any=[]

  public userForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })
sigin(){
  this._loginService.login(this.userForm.value).subscribe((d)=>{
    alert("Login success")
    sessionStorage.setItem("token",d.token)
    this._router.navigateByUrl('/dashboard')
  }
    ,(e)=>{alert("internal server error")})
}
toglevisible(){
  this.visible=!this.visible
}

}
