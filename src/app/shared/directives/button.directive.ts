import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  Renderer,
  OnInit,
} from '@angular/core';

/**
 * Button
 * Making this a directive means we don't
 * have to worry about creating host bindings for
 * all button/anchor/input[type=submit] attributes
 */
@Directive({
  selector: '[rioButton]',
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'f6 dim no-underline br-pill ph3 pv2 mb2 dib ' +
      'button-reset input-reset pointer',
  },
  /* tslint:enable */
})
export class ButtonDirective implements OnInit {

  @Input() color: string = 'white';

  @Input() bgColor: string = 'bg-blue';

  @HostBinding('style.border') border: string = '0';

  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer
      .setElementClass(this.elementRef.nativeElement, this.color, true);

    this.renderer
      .setElementClass(this.elementRef.nativeElement, this.bgColor, true);
  }
}
