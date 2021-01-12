import {NgModule} from '@angular/core';
import {TicketsMonitorPageComponent} from './tickets-monitor-page.component';
import {NzButtonModule, NzCardModule, NzDividerModule, NzGridModule, NzLayoutModule} from 'ng-zorro-antd';
import {ItemPositionModule} from '../item-position/item-position.module';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {CommonModule} from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: TicketsMonitorPageComponent},
];

@NgModule({
  imports: [NzButtonModule,
    NzLayoutModule, NzGridModule, NzDividerModule, NzCardModule, ItemPositionModule, NzSpaceModule,
    CommonModule, YouTubePlayerModule,
    RouterModule.forChild(routes)],
  declarations: [TicketsMonitorPageComponent],
  exports: [TicketsMonitorPageComponent]
})
export class TicketsMonitorModule {
}
