import {Component} from '@angular/core';
import {PaginateTicket, PartialTicket, TicketResponse, TicketsService} from '../../api/tickets.service';
import {RealtimeApiService} from '../../api/realtime-api.service';
import {MovementsService, Type} from '../../api/movements.service';
import {tap} from 'rxjs/operators';
import {UserService} from '../../api/user.service';
import {TicketServicesResponse} from '../../api/ticket-service.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent {
  tickets: PaginateTicket;
  showEndingDialog = false;
  endingDialogConf: {
    ticket: TicketResponse;
    visits: number;
  };

  constructor(private ticketService: TicketsService, private realtimeApiService: RealtimeApiService,
              private movementsService: MovementsService, private userService: UserService) {
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
    this.userService.countTicketMonthly(ticket.user.id)
      .subscribe((count: number) => {
        this.showEndingDialog = true;
        this.endingDialogConf = {
          ticket,
          visits: count
        };
      });
  }

  /*
  * Cuando se confirma la finalización de servicio se registra la entrada de dinero y se cambia el estado del turno
  * */
  okEndingDialog(totalValue: number): void {
    this.movementsService
      .create({type: Type.INCOMING, value: totalValue, description: this.servicesToString()})
      .pipe(tap(() => this.updateTicket(this.endingDialogConf.ticket.id, {status: 'served', active: false})))
      .subscribe(() => {
        this.showEndingDialog = false;
      });
  }

  private servicesToString(): string {
    if (isNotNullOrUndefined(this.endingDialogConf)) {
      return this.endingDialogConf.ticket?.ticket_services
        .map((service: TicketServicesResponse) => {
          return service.service?.name;
        }).toString();
    }

    return '';
  }

  closeEndingDialog(): void {
    this.showEndingDialog = false;
  }
}
