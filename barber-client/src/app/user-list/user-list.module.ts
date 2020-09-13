import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list.component';
import {NzListModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [UserListComponent],
  exports: [UserListComponent],
  imports: [
    CommonModule,
    NzListModule
  ]
})
export class UserListModule {
}
