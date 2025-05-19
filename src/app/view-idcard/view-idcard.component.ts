import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdCardsService } from '../id-cards.service';

@Component({
  selector: 'app-view-idcard',
  templateUrl: './view-idcard.component.html',
  styleUrls: ['./view-idcard.component.css']
})
export class ViewIdcardComponent {
  card:any=[]
constructor(private _activeRounte:ActivatedRoute,private _cardaservice:IdCardsService){
  _activeRounte.params.subscribe((data:any)=>{

    _cardaservice.getIdCard(data.id).subscribe((c)=>{
      this.card=c
      console.log(this.card)
    },(e)=>{alert("internal server error")})
  },(e)=>{alert("internal server error")})
}
}
