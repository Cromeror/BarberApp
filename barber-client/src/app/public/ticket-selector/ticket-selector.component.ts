import {Component, ViewChild} from '@angular/core';
import {BarberServicesComponent} from '../../barber-services/barber-services.component';
import {Tickets, TicketsService} from '../../api/tickets.service';
import {TicketServiceService} from '../../api/ticket-service.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-ticket-selector',
  templateUrl: './ticket-selector.component.html',
  styleUrls: ['./ticket-selector.component.scss']
})
export class TicketSelectorComponent {
  @ViewChild('barberService') barberServiceItem: BarberServicesComponent;
  step = 0;

  constructor(private ticketsService: TicketsService, private ticketServiceService: TicketServiceService) {
  }

  createTicket(): void {
    this.ticketsService.create({userId: 1, position: 1})
      .pipe(tap(
        (resTicket: Tickets) => {
          this.barberServiceItem.bValue.forEach((serviceId: number) => {
            this.ticketServiceService.create({serviceId, ticketId: resTicket.id}).subscribe(console.log);
          });
        }
      ))
      .subscribe(() => {
        this.step = 2;
      });
  }
}
