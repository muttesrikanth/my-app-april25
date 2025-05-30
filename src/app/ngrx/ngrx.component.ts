import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { appState } from './store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.action';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent {
  count:Observable<number>;
constructor(private _store:Store<appState>){
this.count=_store.pipe(select('count'));

}
inc(){
  this._store.dispatch(increment())
}
dec(){
  this._store.dispatch(decrement())
}
reset(){
  this._store.dispatch(reset())
}
}
