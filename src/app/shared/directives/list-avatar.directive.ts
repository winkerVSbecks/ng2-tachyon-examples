import { Directive } from '@angular/core';

@Directive({
  selector: '[rioListAvatar]',
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'dib br-100 bg-light-gray dark-gray border-box pa3',
    style: 'min-width: 3rem; min-height: 3rem;',
  },
  /* tslint:enable */
})
export class ListAvatarDirective {}
