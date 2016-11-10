import { Directive } from '@angular/core';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

@Directive({
  selector: '[rioHeading]',
  /* tslint:disable:use-host-property-decorator */
  host: { class: 'ma0 lh-title' },
  /* tslint:enable */
})
export class HeadingDirective {}
