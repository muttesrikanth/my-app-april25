import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private _eleRef:ElementRef) { }

  @HostListener('keyup')
  change(){
    this._eleRef.nativeElement.value=this._eleRef.nativeElement.value.toUpperCase()
  }

}
