import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
constructor(private _accountService:AccountsService){
this.getAccountData()
}
accounts:any=[]

getAccountData(){
this._accountService.getAccounts().subscribe(
  (data)=>{
    this.accounts=data
  },(e)=>{
    alert('Internal server error')
  }
)
}

term:string=''
search(){
  this._accountService.searchAccounts(this.term).subscribe(
  (data)=>{
    this.accounts=data
  },(e)=>{
    alert('Internal server error')
  }
)
}
column:any=''
order:any=''
sort(){
  this._accountService.sortAccounts(this.column,this.order).subscribe(
  (data)=>{
    this.accounts=data
  },(e)=>{
    alert('Internal server error')
  }
)
}
limit:any=''
page:any=''
paginate(){
  this._accountService.pageNationAccounts(this.limit,this.page).subscribe(
  (data)=>{
    this.accounts=data
  },(e)=>{
    alert('Internal server error')
  }
)
}
delete(i:any){
this._accountService.deleteAccount(i).subscribe(
  (data)=>{
    alert("deleted")
  },(e)=>{
    alert('Internal server error')
  }
)
}

}
