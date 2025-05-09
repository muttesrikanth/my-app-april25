import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  message="interpolation works!"
  disabled=true
  value="srikant"
  mobile:string="+91 "
  greet(){
    alert("good morning")
  }
  typing(){
    alert("typing....")
  }
  team(){
      alert("Team")
  }

num1:number=0;
num2:number=0;
sum:number=0;
calculate(){
  this.sum=this.num1+this.num2;
}


}
