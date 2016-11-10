import { Component, Input } from '@angular/core';

type Alignment = 'top' | 'center' | 'bottom';

@Component({
  selector: 'rio-media',
  template: `
  <div class="flex" [ngClass]="alignments[align]">
    <img [src]="img"
      [ngClass]="{ 'ml3 order-last': right, 'mr3': !right }"/>
    <div class="flex-auto">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  /* tslint:disable:use-host-property-decorator */
  host: { class: 'db' },
  /* tslint:enable */
})
export class MediaComponent {
  @Input() img: string;

  @Input() right: boolean = false;

  @Input() align: Alignment = 'center';

  alignments = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end',
  };
}
