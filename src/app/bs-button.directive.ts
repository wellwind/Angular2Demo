import {
  Directive,
  ElementRef,
  Input,
  Renderer,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[bsButton]'
})
export class BsButtonDirective implements OnInit {
  @Input() bsButton: string;

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  ngOnInit() {
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, 'btn-' + this.bsButton, true);
  }
}