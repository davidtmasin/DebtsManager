import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ButtonCancel]'
})
export class ButtonCancelDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.background = '#e35e6b';
    el.nativeElement.style.color = '#FFF';
    el.nativeElement.style.marginLeft = '5px';
  }

}
