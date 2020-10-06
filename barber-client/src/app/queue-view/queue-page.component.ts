import {Component} from '@angular/core';
import {RealtimeApiService} from '../api/realtime-api.service';
import {PaginateTicket} from '../api/tickets.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './queue-page.component.html',
  styleUrls: ['./queue-page.component.scss']
})
export class QueuePageComponent {
  tickets: PaginateTicket;

  constructor(private realtimeApiService: RealtimeApiService) {
    realtimeApiService.tickets$.subscribe((tickets: PaginateTicket) => {
      console.log(tickets);
      this.tickets = tickets;
    });
  }
}
