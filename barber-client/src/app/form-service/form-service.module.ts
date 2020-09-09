import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormServiceComponent} from './form-service.component';
import {
    NzButtonModule,
    NzFormModule,
    NzIconModule,
    NzInputModule, NzInputNumberModule,
    NzNotificationModule,
    NzSelectModule
} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FormServiceComponent],
  exports: [FormServiceComponent],
    imports: [
        CommonModule,
        NzFormModule,
        NzInputModule,
        ReactiveFormsModule,
        NzSelectModule,
        NzNotificationModule,
        NzIconModule,
        NzButtonModule,
        NzInputNumberModule
    ]
})
export class FormServiceModule {
}
