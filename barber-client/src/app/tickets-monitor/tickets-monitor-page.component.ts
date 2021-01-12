import {Component} from '@angular/core';
import {RealtimeApiService} from '../api/realtime-api.service';
import {PaginateTicket, Status, TicketResponse} from '../api/tickets.service';

@Component({
  selector: 'app-tickets-monitor-page',
  templateUrl: './tickets-monitor-page.component.html',
  styleUrls: ['./tickets-monitor-page.component.scss']
})
export class TicketsMonitorPageComponent {
  paginateTicketInQueue: PaginateTicket;
  ticketsInService: TicketResponse[];

  constructor(private realtimeApiService: RealtimeApiService) {
    realtimeApiService.tickets$
      .subscribe((tickets: PaginateTicket) => {
        const ticketsInQueue = tickets.data.filter((ticket: TicketResponse) => ticket.status === Status.IN_QUEUE);
        this.paginateTicketInQueue = {...tickets, data: ticketsInQueue};
        this.ticketsInService = tickets.data.filter((ticket: TicketResponse) => ticket.status === Status.IN_SERVICE);
      });

    realtimeApiService.playlist$.subscribe(console.log);
  }
}
