import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[color-directive]'
})
export class ColorDirective {

  constructor() { }

  color:any

  @HostBinding("style.backgroundColor") get setColorr(){
    return this.color;
  }

  @HostListener('mouseenter')
  onMouse(){
    this.color = "#B44922";
  }

  @HostListener('mouseleave')
  onLeave(){
    this.color = "#FD7543";
  }

}
