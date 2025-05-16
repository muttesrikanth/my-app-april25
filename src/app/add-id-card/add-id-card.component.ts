import { Component } from '@angular/core';
import { IdCardsService } from '../id-cards.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-id-card',
  templateUrl: './add-id-card.component.html',
  styleUrls: ['./add-id-card.component.css']
})
export class AddIdCardComponent {
constructor(private _cardService:IdCardsService,private _router:Router){}
 public idCardForm:FormGroup=new FormGroup({
  name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture:new FormControl() ,
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
 })
  submit(){
    this._cardService.addIdCard(this.idCardForm.value).subscribe((data:any)=>{
      alert("data created with id "+ data.id)
      this._router.navigateByUrl('/dashboard/idcards')
    },(e)=>{
      alert("Internal server error!")
    })
  }
}
