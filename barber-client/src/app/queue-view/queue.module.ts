import {NgModule} from '@angular/core';

import {QueueRoutingModule} from './queue-routing.module';

import {QueuePageComponent} from './queue-page.component';
import {NzButtonModule, NzCardModule, NzDividerModule, NzGridModule, NzLayoutModule} from 'ng-zorro-antd';
import {ItemPositionModule} from "../item-position/item-position.module";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {CommonModule} from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
    imports: [QueueRoutingModule, NzButtonModule, NzLayoutModule, NzGridModule, NzDividerModule, NzCardModule, ItemPositionModule, NzSpaceModule, CommonModule, YouTubePlayerModule],
  declarations: [QueuePageComponent],
  exports: [QueuePageComponent]
})
export class QueueModule {
}
