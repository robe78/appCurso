import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  @HostBinding('class.itemOrange') private mostrar = false;

  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }

  @HostListener('mouseout') onOUt() {
    this.mostrar = false;
  }

}
