import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() message:string=''
@Output() bevent:EventEmitter<any>=new EventEmitter()
pass(){
  this.bevent.emit(40)
}
}
