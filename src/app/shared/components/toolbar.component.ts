import { Component } from '@angular/core';

@Component({
  selector: 'rio-toolbar',
  template: `
    <nav class="h3 ph3 flex items-center item-stretch bg-blue white">
      <ng-content select="img, svg, rio-icon"></ng-content>
      <div class="flex-auto"></div>
      <ng-content></ng-content>
    </nav>
  `,
  /* tslint:disable:use-host-property-decorator */
  host: { class: 'db' },
  /* tslint:enable */
})
export class ToolbarComponent {}
