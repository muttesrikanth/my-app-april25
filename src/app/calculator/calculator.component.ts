import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1:number=0;
  number2:number=0;
  res:number=0
  add(){
    this.res=this.number1+this.number2
  }
  sub(){
    this.res=this.number1-this.number2
  }
  mul(){
    this.res=this.number1*this.number2
  }
  div(){
    this.res=this.number1/this.number2
  }
}
