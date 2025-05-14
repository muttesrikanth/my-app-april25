import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
products:any=[]
constructor(private _product_service:MailService){
  _product_service.getFlipkartProducts().subscribe((data:any)=>{
    this.products=data
  },(err)=>{
    alert("Internal server error")
  })
}
}
