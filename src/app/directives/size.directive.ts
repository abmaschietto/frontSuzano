import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[size-directive]'
})
export class SizeDirective {

  constructor() { }

  size:string;

  @HostBinding('style.fontSize') get setSize(){
    return this.size;
  }

  @HostListener('mouseenter')
  onMouse(){
    this.size = '125%'
  }

  @HostListener('mouseleave')
  onMleave(){
    this.size = "100%"
  }

}
