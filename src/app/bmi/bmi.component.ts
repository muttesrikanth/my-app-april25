import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
wei:number=0
hei:number=0
bmi:number=0
status:string=""
calculate(){
  this.bmi= this.wei/(this.hei*this.hei)
  if(this.bmi<=18.4){
    this.status="under weight"
}
else if ((this.bmi>18.5)&&(this.bmi<25)){
    this.status="normal"
}
else if ((this.bmi>25)&&(this.bmi<40)){
    this.status="over weight"
}
else {
    this.status="obese"
}
}
}
