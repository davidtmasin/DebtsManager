import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ButtonSave]'
})
export class ButtonSaveDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.background = '#58D68D';
    el.nativeElement.style.color = '#FFF';
    el.nativeElement.style.marginLeft = '5px';
  }
}
