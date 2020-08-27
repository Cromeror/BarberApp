import {NgModule} from '@angular/core';

import {QueueRoutingModule} from './queue-routing.module';

import {QueuePageComponent} from './queue-page.component';
import {NzButtonModule, NzCardModule, NzDividerModule, NzGridModule, NzLayoutModule} from 'ng-zorro-antd';
import {ItemPositionModule} from "../item-position/item-position.module";
import {NzSpaceModule} from "ng-zorro-antd/space";

@NgModule({
  imports: [QueueRoutingModule, NzButtonModule, NzLayoutModule, NzGridModule, NzDividerModule, NzCardModule, ItemPositionModule, NzSpaceModule],
  declarations: [QueuePageComponent],
  exports: [QueuePageComponent]
})
export class QueueModule {
}
