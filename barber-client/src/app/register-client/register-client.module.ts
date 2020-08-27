import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterClientComponent} from './register-client.component';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzLayoutModule, NzNotificationModule, NzSelectModule,
  NzToolTipModule,
  NzWaveModule
} from 'ng-zorro-antd';
import {RegisterClientFormComponent} from './register-client-form/register-client-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterClientComponent, RegisterClientFormComponent],
  exports: [RegisterClientComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzToolTipModule,
    NzWaveModule,
    NzCheckboxModule,
    NzButtonModule,
    NzSelectModule,
    NzNotificationModule
  ]
})
export class RegisterClientModule {
}
