import { Component } from '@angular/core';

@Component({
  selector: 'rio-list',
  template: `<ng-content></ng-content>`,
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'db',
    role: 'list',
  },
  /* tslint:enable */
})
export class ListComponent {}
