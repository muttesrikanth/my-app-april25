import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-task',
  templateUrl: './create-user-task.component.html',
  styleUrls: ['./create-user-task.component.css']
})
export class CreateUserTaskComponent {
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
  mobile:new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
  class:new FormControl("",[Validators.required,Validators.min(0),Validators.max(10)]),
  fatherName:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
  email:new FormControl("",[Validators.required,Validators.email]),
  dob:new FormControl("",[Validators.required]),
  address:new FormGroup({
    addressLine:new FormControl("",Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    pincode:new FormControl('',[Validators.required,Validators.min(500000),Validators.max(599999)]),
  }),
  cards:new FormArray([]),
  type:new FormControl('',Validators.required),
})

 get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}
addCard(){
  this.cardsFormArray.push(
    new FormGroup({
      class:new FormControl("",[Validators.required,Validators.min(0),Validators.max(10)]),
      year:new FormControl("",Validators.required),
      percentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(99)]),
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
