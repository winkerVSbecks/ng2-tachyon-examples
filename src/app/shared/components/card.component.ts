import { Component } from '@angular/core';

@Component({
  selector: 'rio-card',
  template: `<ng-content></ng-content>`,
  /* tslint:disable:use-host-property-decorator */
  host: { class: 'dib pa3 br2 ba b--black-30 overflow-hidden' },
  /* tslint:enable */
})
export class CardComponent {}
