// Add shared components, directives, and pipes to this module.
// Do not add global services to this module, add to CoreModule instead.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './directives/button.directive';
import { MediaComponent } from './components/media.component';
import { CardComponent } from './components/card/card.component';
import { CardImageComponent } from './components/card/card-image.component';
import { HeadingDirective } from './directives/heading.directive';
import { ToolbarComponent } from './components/toolbar.component';
import { NavItemDirective } from './directives/nav-item.directive';
import { ButtonOutlineDirective } from './directives/button-outline.directive';
import { IconComponent } from './components/icon/icon.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item.component';
import { ListAvatarDirective } from './directives/list-avatar.directive';

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
    IconComponent,
    ListComponent,
    ListItemComponent,
    ListAvatarDirective,
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
    IconComponent,
    ListComponent,
    ListItemComponent,
    ListAvatarDirective,
  ],
})
export class SharedModule {}
