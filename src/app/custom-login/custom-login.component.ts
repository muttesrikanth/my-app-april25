import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomLoginService } from '../custom-login.service';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.css']
})
export class CustomLoginComponent {
  constructor(private _customlogin:CustomLoginService){
    this.addcoontrols()
  }
switch:boolean=true
swichMode(){
  this.switch=!this.switch
  if(this.switch){
    this.addcoontrols()
  }
  else{
    this.customForm.removeControl('name')
    this.customForm.removeControl('mobile')
  }
}
public customForm:FormGroup=new FormGroup({
  email:new FormControl(),
  password:new FormControl()
})
sinup(){
  this._customlogin.signUp(this.customForm.value).subscribe((data:any)=>{
    alert('sinup success')
    console.log(data)
  },(e)=>{alert('internal server error')});
}
login(){
  // console.log(this.customForm.value)
  this._customlogin.login(this.customForm.value).subscribe((data:any)=>{
    alert('login success')
    console.log(data)
  },(e)=>{alert('internal server error')});
}
addcoontrols(){
   this.customForm.addControl('name',new FormControl())
    this.customForm.addControl('mobile',new FormControl())
}
}
