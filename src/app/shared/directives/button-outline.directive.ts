import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  Renderer,
  OnInit,
} from '@angular/core';

type Rounded = 'left' | 'right' | 'none' | 'all';

@Directive({
  selector: '[rioButtonOutline]',
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'f6 link dim ba bw1 ph3 pv2 mb2 dib bg-white' +
      'button-reset input-reset pointer no-underline',
  },
  /* tslint:enable */
})
export class ButtonOutlineDirective implements OnInit {

  @Input() color: string = 'blue';
  @Input() selected: boolean = false;
  @Input() rounded: Rounded = 'all';

  @HostBinding('style.borderColor') borderColor: string = 'currentColor';
  @HostBinding('style.marginLeft.px') marginLeft: number = 0;

  @HostBinding('class.bg-white')
  get bgWhite() {
    return !this.selected;
  }

  @HostBinding('class.br2')
  get roundedAll() {
    return this.rounded === 'all';
  }

  @HostBinding('class.br0')
  get roundedNone() {
    return this.rounded === 'none';
  }

  @HostBinding('class.br--left2')
  get roundedLeft() {
    return this.rounded === 'left';
  }

  @HostBinding('class.br--right2')
  get roundedRight() {
    return this.rounded === 'right';
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer
      .setElementClass(this.elementRef.nativeElement, this.color, true);
  }
}
