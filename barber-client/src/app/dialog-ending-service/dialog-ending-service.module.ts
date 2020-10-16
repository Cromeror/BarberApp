import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogEndingServiceComponent} from './dialog-ending-service.component';
import {
  NzAvatarModule,
  NzButtonModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzModalModule, NzPopconfirmModule,
  NzTableModule
} from 'ng-zorro-antd';
import {VisitsPipe} from '../dashboard/visits-pipe/visits.pipe';
import {VisitsPipeModule} from '../dashboard/visits-pipe/visits-pipe.module';


@NgModule({
  declarations: [DialogEndingServiceComponent],
  exports: [
    DialogEndingServiceComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzModalModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzTableModule,
    NzIconModule,
    NzAvatarModule,
    VisitsPipeModule
  ]
})
export class DialogEndingServiceModule {
}
