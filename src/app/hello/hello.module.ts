import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HelloRoutingModule } from './hello-routing.module';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    SharedModule,
    HelloRoutingModule,
    FormsModule,
  ],
  declarations: [
    HelloComponent,
  ],
})
export class HelloModule { }
