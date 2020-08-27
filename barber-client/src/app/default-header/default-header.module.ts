import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeaderComponent } from './default-header.component';
import {NzGridModule, NzLayoutModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [DefaultHeaderComponent],
  exports: [
    DefaultHeaderComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzGridModule
  ]
})
export class DefaultHeaderModule { }
