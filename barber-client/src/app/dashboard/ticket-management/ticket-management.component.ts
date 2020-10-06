import {Component} from '@angular/core';
import {PaginateTicket, PartialTicket, TicketsService} from '../../api/tickets.service';
import {RealtimeApiService} from '../../api/realtime-api.service';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  tickets: PaginateTicket;

  constructor(private ticketService: TicketsService, private realtimeApiService: RealtimeApiService) {
    this.realtimeApiService.tickets$
      .subscribe((tickets: PaginateTicket) => {
        this.tickets = tickets;
      });
  }

  updateTicket(id: number, ticket: PartialTicket) {
    this.ticketService.update(ticket, id).subscribe(console.log);
  }
}
