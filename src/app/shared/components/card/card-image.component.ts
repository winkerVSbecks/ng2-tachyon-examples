import { Component, Input } from '@angular/core';

@Component({
  selector: 'rio-card-image',
  template: `<img [src]="src"
    class="db mw-none h-auto"
    [ngStyle]="{
      'width': 'calc(100% + 2 * 1rem)',
      'margin': '-1rem -1rem 1rem -1rem'
    }"/>
  `,
  /* tslint:disable:use-host-property-decorator */
  host: { class: 'db' },
  /* tslint:enable */
})
export class CardImageComponent {
  @Input() src: string;
}
