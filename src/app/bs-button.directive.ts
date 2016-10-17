import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[bsButton]'
})
export class BsButtonDirective implements OnInit {
  @Input() defaultClass: string;
  @Input() hoverClass: string;

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  ngOnInit() {
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.setElementButtonClass(this.defaultClass || 'info', null);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setElementButtonClass(this.hoverClass || 'danger', this.defaultClass || 'info');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setElementButtonClass(this.defaultClass || 'info', this.hoverClass || 'danger');
  }

  setElementButtonClass(buttonClassName: string, removeClassName: string) {
    this.renderer.setElementClass(this.el.nativeElement, 'btn-' + removeClassName, false);
    this.renderer.setElementClass(this.el.nativeElement, 'btn-' + buttonClassName, true);
  }
}
