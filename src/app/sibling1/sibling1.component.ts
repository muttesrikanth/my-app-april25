import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
  constructor(private _commonService:CommonService){}
name:string=''
submit(){
this._commonService.communicationSub.next(this.name)
}
}
