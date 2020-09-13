import {Component, ViewChild} from '@angular/core';
import {BarberServicesComponent} from '../../barber-services/barber-services.component';
import {Tickets, TicketsService} from '../../api/tickets.service';
import {TicketServiceService} from '../../api/ticket-service.service';
import {tap} from 'rxjs/operators';
import {PaginateUser, User, UserService} from '../../api/user.service';
import {LoginType} from '../../client-login-method/client-login-method.component';

@Component({
  selector: 'app-ticket-selector',
  templateUrl: './ticket-selector.component.html',
  styleUrls: ['./ticket-selector.component.scss']
})
export class TicketSelectorComponent {
  @ViewChild('barberService') barberServiceItem: BarberServicesComponent;
  step = 0;
  users: PaginateUser;
  client: User;
  title: string;

  constructor(private ticketsService: TicketsService,
              private ticketServiceService: TicketServiceService,
              private userService: UserService) {
  }

  createTicket(): void {
    this.ticketsService.create({userId: this.client.id, position: 1})
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

  /**
   * Busca el cliente si se identifica con huella, si usa otro medio se muestra una lista de los posibles clientes para
   * que seleccione
   * @param event: evento emitido por el componente <app-client-login-method>
   */
  searchClient(event: { value: string; type: LoginType }): void {
    switch (event.type) {
      case LoginType.FINGERPRINT:
        break;
      case LoginType.PHONE:
        this.fetchClients({phone: event.value});
        break;
      case LoginType.EMAIl:
        this.fetchClients({email: event.value});
        break;
    }
  }

  fetchClients(params: any): void {
    this.userService.all(params)
      .subscribe((paginateUser: PaginateUser) => {
        this.users = paginateUser;
        this.title = 'Seleccione su usuario de la lista';
        this.step = 3;
      });
  }
}
