import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.tranforsm('uppercase');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.tranforsm(null);
  }

  private tranforsm(textTransform: string) {
    this.el.nativeElement.style['text-transform'] = textTransform;
  }
}
