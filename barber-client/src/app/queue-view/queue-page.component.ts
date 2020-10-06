import {Component} from '@angular/core';
import {RealtimeApiService} from '../api/realtime-api.service';
import {PaginateTicket, Ticket} from '../api/tickets.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './queue-page.component.html',
  styleUrls: ['./queue-page.component.scss']
})
export class QueuePageComponent {
  tickets: PaginateTicket;

  constructor(private realtimeApiService: RealtimeApiService) {
    this.realtimeApiService.authenticate({
      strategy: 'local',
      email: 'cristobal@gmail.com',
      password: '123456'
    })
      .then(() => {
        this.realtimeApiService.onMonitor(10)
          .subscribe((tickets: PaginateTicket) => {
            this.tickets = tickets;
          });
      })
      .catch(err => {
        console.log('Wrong credentials!');
      });
  }
}
