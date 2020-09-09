import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogFormServiceComponent } from './dialog-form-service.component';
import {NzButtonModule, NzGridModule, NzModalModule} from 'ng-zorro-antd';
import {FormServiceModule} from '../form-service/form-service.module';



@NgModule({
  declarations: [DialogFormServiceComponent],
  exports: [
    DialogFormServiceComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzGridModule,
    FormServiceModule,
    NzButtonModule
  ]
})
export class DialogFormServiceModule { }
