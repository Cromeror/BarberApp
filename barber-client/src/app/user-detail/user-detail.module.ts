import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail.component';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzToolTipModule
} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzToolTipModule,
    NzIconModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule
  ],
  exports: [UserDetailComponent]
})
export class UserDetailModule {
}
