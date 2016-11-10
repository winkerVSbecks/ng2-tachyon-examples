// Add shared components, directives, and pipes to this module.
// Do not add global services to this module, add to CoreModule instead.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './directives/button.directive';
import { MediaComponent } from './components/media.component';
import { CardComponent } from './components/card.component';
import { CardImageComponent } from './components/card-image.component';
import { HeadingDirective } from './directives/heading.directive';
import { ToolbarComponent } from './components/toolbar.component';
import { NavItemDirective } from './directives/nav-item.directive';
import { ButtonOutlineDirective } from './directives/button-outline.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ButtonDirective,
    MediaComponent,
    CardComponent,
    CardImageComponent,
    HeadingDirective,
    ToolbarComponent,
    NavItemDirective,
    ButtonOutlineDirective,
  ],
  exports: [
    CommonModule,
    ButtonDirective,
    MediaComponent,
    CardComponent,
    CardImageComponent,
    HeadingDirective,
    ToolbarComponent,
    NavItemDirective,
    ButtonOutlineDirective,
  ],
})
export class SharedModule {}
