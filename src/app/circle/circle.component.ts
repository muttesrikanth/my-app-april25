import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  rad:number=0
  res:number=0
  area(){
    this.res=(Math.PI*(this.rad**2))
  }
  per(){
    this.res=2*Math.PI*this.rad

  }
}
