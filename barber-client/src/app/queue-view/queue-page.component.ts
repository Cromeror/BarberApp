import {Component} from '@angular/core';
import {RealtimeApiService} from '../api/realtime-api.service';
import {PaginateTicket, Status, TicketResponse} from '../api/tickets.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './queue-page.component.html',
  styleUrls: ['./queue-page.component.scss']
})
export class QueuePageComponent {
  paginateTicketInQueue: PaginateTicket;
  ticketsInService: TicketResponse[];

  constructor(private realtimeApiService: RealtimeApiService) {
    realtimeApiService.tickets$
      .subscribe((tickets: PaginateTicket) => {
        const ticketsInQueue = tickets.data.filter((ticket: TicketResponse) => ticket.status === Status.IN_QUEUE);
        this.paginateTicketInQueue = {...tickets, data: ticketsInQueue};
        this.ticketsInService = tickets.data.filter((ticket: TicketResponse) => ticket.status === Status.IN_SERVICE);
      });
  }
}
