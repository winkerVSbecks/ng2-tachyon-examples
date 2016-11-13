import { Directive } from '@angular/core';

@Directive({
  selector: '[rioLabel]',
  /* tslint:disable:use-host-property-decorator */
  host: { class: 'f6 b lh-solid flex items-center pb2 pointer' },
  /* tslint:enable */
})
export class LabelDirective {}
