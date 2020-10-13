import {Component} from '@angular/core';
import {PaginateTicket, PartialTicket, TicketResponse, TicketsService} from '../../api/tickets.service';
import {RealtimeApiService} from '../../api/realtime-api.service';
import {MovementsService, Type} from '../../api/movements.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  tickets: PaginateTicket;
  showEndingDialog = false;
  currentTicket: TicketResponse;

  constructor(private ticketService: TicketsService, private realtimeApiService: RealtimeApiService,
              private movementsService: MovementsService) {
    this.realtimeApiService.tickets$
      .subscribe((tickets: PaginateTicket) => {
        this.tickets = tickets;
      });
  }

  updateTicket(id: number, ticket: PartialTicket) {
    this.ticketService.update(ticket, id).subscribe(console.log);
  }

  /*
  * Muestra el modal para terminar el servicio y realizar el cobro del dinero
  * */
  endingService(id: number, ticket: TicketResponse) {
    this.showEndingDialog = true;
    this.currentTicket = ticket;
  }

  /*
  * Cuando se confirma la finalización de servicio se registra la entrada de dinero y se cambia el estado del turno
  * */
  okEndingDialog(totalValue: number): void {
    this.movementsService
      .create({type: Type.INCOMING, value: totalValue})
      .pipe(tap(() => this.updateTicket(this.currentTicket.id, {status: 'served', active: false})))
      .subscribe(() => {
        this.showEndingDialog = false;
      });
  }

  closeEndingDialog(): void {
    this.showEndingDialog = false;
  }
}
