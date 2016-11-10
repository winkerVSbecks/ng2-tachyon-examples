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
  styles: [`
    :host /deep/ svg { fill: currentColor; }
  `],
})
export class ToolbarComponent {}
