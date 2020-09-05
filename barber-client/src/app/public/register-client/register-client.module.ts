import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzGridModule} from 'ng-zorro-antd';
import {RegisterClientComponent} from './register-client.component';
import {DefaultHeaderModule} from '../../default-header/default-header.module';
import {RegisterClientFormModule} from '../../register-client-form/register-client-form.module';

@NgModule({
  declarations: [RegisterClientComponent],
  exports: [RegisterClientComponent],
  imports: [
    CommonModule,
    DefaultHeaderModule,
    RegisterClientFormModule,
    NzGridModule
  ]
})
export class RegisterClientModule {
}
