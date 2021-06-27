import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[upperCaseText]'
})
export class UpperCaseTextDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.textTransform = 'uppercase';
 }
}