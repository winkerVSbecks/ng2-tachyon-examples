import { Component, Input } from '@angular/core';
const files = require.context('!svg-sprite!./assets', false, /.*\.svg$/);
files.keys().forEach(files);

@Component({
  selector: 'rio-icon',
  template: `
  <svg viewBox="0 0 20 20">
    <use [attr.xlink:href]="'#' + type"></use>
  </svg>
  `,
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'dib',
    style: 'fill: currentColor; width: 1em; height: 1em;',
  },
  /* tslint:enable */
})
export class IconComponent {
  @Input() type: string;
}
