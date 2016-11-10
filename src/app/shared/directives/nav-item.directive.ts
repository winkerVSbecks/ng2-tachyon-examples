import { Directive } from '@angular/core';

@Directive({
  selector: '[rioNavItem]',
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'dib b lh-solid ma0 flex items-center self-stretch pointer ' +
      'no-underline pa2 dim',
    style: 'color: inherit;',
  },
  /* tslint:enable */
})
export class NavItemDirective {}
