import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[GeneralButton]'
})
export class GeneralButtonDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight = '500'
    el.nativeElement.style.color = '#FFF'
    el.nativeElement.style.background = '#3F51B5'
  }
}
