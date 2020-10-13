import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogFormClientComponent } from './dialog-form-client.component';
import {RegisterClientFormModule} from '../register-client-form/register-client-form.module';
import {NzButtonModule, NzModalModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [DialogFormClientComponent],
  exports: [
    DialogFormClientComponent
  ],
  imports: [
    CommonModule,
    RegisterClientFormModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class DialogFormClientModule { }
