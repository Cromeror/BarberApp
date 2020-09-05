import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarberServicesComponent} from './barber-services.component';
import {NzCheckboxModule, NzGridModule, NzRadioModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {NzSpaceModule} from 'ng-zorro-antd/space';

@NgModule({
  declarations: [BarberServicesComponent],
  exports: [BarberServicesComponent],
  imports: [
    CommonModule,
    NzRadioModule,
    NzGridModule,
    NzCheckboxModule,
    FormsModule,
    NzSpaceModule
  ]
})
export class BarberServicesModule {
}
