import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
wid:number=0;
len:number=0;
res:number=0;
area(){
this.res=this.wid*this.len
}
per(){
  this.res=2*(this.wid+this.len)
}

}
