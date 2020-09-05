import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketSelectorComponent} from './ticket-selector.component';
import {NzButtonModule, NzCardModule, NzDividerModule, NzGridModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {BarberServicesModule} from '../../barber-services/barber-services.module';

@NgModule({
  declarations: [TicketSelectorComponent],
    imports: [CommonModule, NzGridModule, NzCardModule, NzDividerModule, NzButtonModule, RouterModule, BarberServicesModule],
  exports: [TicketSelectorComponent]
})
export class TicketSelectorModule {
}
