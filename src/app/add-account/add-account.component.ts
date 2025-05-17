import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {

  constructor(private _accountService:AccountsService,private _router:Router){}
  account_name:string=""
    available_balance:number=0
    account_number:number=0
    city:string=''
    profie_picture:string=''
    ifsc_code:string=''

    submit(){
      let   data={account_name:this.account_name,available_balance:this.available_balance,account_number:this.account_number,city:this.city,profie_picture:this.profie_picture,ifsc_code:this.ifsc_code}
      this._accountService.addAccount(data).subscribe(
  (data:any)=>{
    alert("account created with id"+data.id)
    this._router.navigateByUrl('/dashboard/accounts')
  },(e)=>{
    alert('Internal server error')
  }
)
    }

}
