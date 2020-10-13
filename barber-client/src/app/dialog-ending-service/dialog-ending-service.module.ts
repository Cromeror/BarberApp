import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogEndingServiceComponent} from './dialog-ending-service.component';
import {
  NzButtonModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzModalModule,
  NzTableModule
} from 'ng-zorro-antd';


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
    NzIconModule
  ]
})
export class DialogEndingServiceModule {
}
