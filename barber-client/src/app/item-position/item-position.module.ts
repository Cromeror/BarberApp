import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPositionComponent } from './item-position.component';
import {NzGridModule} from "ng-zorro-antd";



@NgModule({
  declarations: [ItemPositionComponent],
  exports: [
    ItemPositionComponent,
    ItemPositionComponent
  ],
  imports: [
    CommonModule,
    NzGridModule
  ]
})
export class ItemPositionModule { }
