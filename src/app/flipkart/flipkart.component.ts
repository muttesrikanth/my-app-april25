import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
products:any=[]
constructor(private _product_service:FlipkartService){
  _product_service.getFlipkartProducts().subscribe((data:any)=>{
    this.products=data
  },(err)=>{
    alert("Internal server error")
  })
}
}
