import { Component } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Custvalidators } from './validater';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if (data=='dayscholer'){
          this.userForm.addControl('busfee',new FormControl())
          this.userForm.removeControl('hostelfee')
        }
        else{
          this.userForm.addControl('hostelfee',new FormControl())
          this.userForm.removeControl('busfee')
        }
      }
    )
  }
public userForm:FormGroup=new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
  mobile:new FormControl(),
  email:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12),Custvalidators]),
  password:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    pin:new FormControl(),
  }),
  type:new FormControl(),

  cards:new FormArray([])
})

 get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}
addCard(){
  this.cardsFormArray.push(
    new FormGroup({
      number:new FormControl(),
      name:new FormControl(),
      expry:new FormControl(),
      cvv:new FormControl(),

    })
  )
}
delete(i:any){
  this.cardsFormArray.removeAt(i)
}
submit(){
  console.log(this.userForm)
}
}
