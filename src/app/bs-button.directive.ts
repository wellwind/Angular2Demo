import {
  Directive,
  ElementRef,
  Input,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[bsButton]'
})
export class BsButtonDirective {
  @Input() bsButton: string;

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementClass(el.nativeElement, 'btn', true);
    renderer.setElementClass(el.nativeElement, 'btn-info', true);
  }
}