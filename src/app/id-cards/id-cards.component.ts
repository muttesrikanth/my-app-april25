import { Component } from '@angular/core';
import { IdCardsService } from '../id-cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-id-cards',
  templateUrl: './id-cards.component.html',
  styleUrls: ['./id-cards.component.css']
})
export class IdCardsComponent {
  cards:any=[]
term:string=''
   constructor(private _cardServices:IdCardsService,private _router:Router){
    this.getCardData()
   }

   getCardData(){
    this._cardServices.getIdCards().subscribe((data:any)=>{
      this.cards=data
    },(e)=>{alert('Internal server error')})
   }
   search(){
    this._cardServices.searchIdCards(this.term).subscribe((data:any)=>{
      this.cards=data
    },(e)=>{alert('Internal server error')})
   }

   column:string=''
   order:string=''
   sort(){
     this._cardServices.sortCards(this.column,this.order).subscribe((data:any)=>{
      this.cards=data
    },(e)=>{alert('Internal server error')})
   }
  limit:any=''
  page:any=''
  pagefn(){
this._cardServices.pageNation(this.limit,this.page).subscribe((data:any)=>{
      this.cards=data
    },(e)=>{alert('Internal server error')})
  }
  createCard(){
    this._router.navigateByUrl('/dashboard/addidcards')
  }
  delete(id:any){
    if(confirm('sure want to delete ?')){
    this._cardServices.deleteCard(id).subscribe((data:any)=>{  
        alert('card deleted')
        this.getCardData()
      },(e)=>{alert('Internal server error')})
    }
    else{
        alert("you have cancelled delete")
    }
  }
}
