import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarberServicesComponent} from './barber-services.component';
import {NzCheckboxModule, NzEmptyModule, NzFormModule, NzGridModule, NzRadioModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {ServicesService} from '../api/services.service';

@NgModule({
  declarations: [BarberServicesComponent],
  exports: [BarberServicesComponent],
  imports: [
    CommonModule,
    NzRadioModule,
    NzGridModule,
    NzCheckboxModule,
    FormsModule,
    NzSpaceModule,
    NzFormModule,
    ReactiveFormsModule,
    NzEmptyModule
  ],
  providers: [ServicesService]
})
export class BarberServicesModule {
}
