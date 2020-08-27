import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterClientFormComponent} from './register-client-form.component';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzNotificationModule,
  NzSelectModule,
  NzToolTipModule
} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterClientFormComponent],
  exports: [RegisterClientFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzToolTipModule,
    NzCheckboxModule,
    NzButtonModule,
    NzSelectModule,
    NzNotificationModule,
  ]
})
export class RegisterClientFormModule {
}
