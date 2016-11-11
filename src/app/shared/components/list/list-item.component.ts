import { Component } from '@angular/core';

@Component({
  selector: 'rio-list-item',
  template: `
  <ng-content select="rio-icon, [rioListAvatar]"></ng-content>
  <div class="flex-auto ml4">
    <ng-content></ng-content>
  </div>
  `,
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'db flex mb4 items-center',
    role: 'listitem',
  },
  /* tslint:enable */
})
export class ListItemComponent {}
