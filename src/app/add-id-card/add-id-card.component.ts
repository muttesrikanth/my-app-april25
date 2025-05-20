import { Component } from '@angular/core';
import { IdCardsService } from '../id-cards.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-id-card',
  templateUrl: './add-id-card.component.html',
  styleUrls: ['./add-id-card.component.css']
})
export class AddIdCardComponent {
  id:any=''
constructor(private _cardService:IdCardsService,private _router:Router,private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe((data:any)=>{
    this.id=data.id
    if(this.id){
      _cardService.getIdCard(this.id).subscribe((data:any)=>{
        this.idCardForm.patchValue(data);
      },(e)=>{alert('data fetching failed')})
    }
  },(e)=>{alert('internal server errror')})
}
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
   if(this.id){
    console.log('edit'+this.id)
    this._cardService.editIdCard(this.id,this.idCardForm.value).subscribe((data:any)=>{
      alert('id card edited with id'+data.id)
      this._router.navigate(['/dashboard/idcards'])
    },(e)=>{alert('edit failed')})
   }
   else{
     this._cardService.addIdCard(this.idCardForm.value).subscribe((data:any)=>{
      alert("data created with id "+ data.id)
      this._router.navigateByUrl('/dashboard/idcards')
    },(e)=>{
      alert("Internal server error!")
    })
   }
  }
}
