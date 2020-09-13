import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketSelectorComponent} from './ticket-selector.component';
import {NzButtonModule, NzCardModule, NzDividerModule, NzGridModule, NzIconModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {BarberServicesModule} from '../../barber-services/barber-services.module';
import {TicketsService} from '../../api/tickets.service';
import {TicketServiceService} from '../../api/ticket-service.service';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {ClientLoginMethodModule} from '../../client-login-method/client-login-method.module';

@NgModule({
  declarations: [TicketSelectorComponent],
  imports: [CommonModule, NzGridModule, NzCardModule, NzDividerModule, NzButtonModule, RouterModule, BarberServicesModule, NzSpaceModule, NzIconModule, ClientLoginMethodModule],
  exports: [TicketSelectorComponent],
  providers: [TicketsService, TicketServiceService]
})
export class TicketSelectorModule {
}
