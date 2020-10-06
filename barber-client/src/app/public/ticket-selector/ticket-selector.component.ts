import {Component, ViewChild} from '@angular/core';
import {BarberServicesComponent} from '../../barber-services/barber-services.component';
import {Ticket, TicketsService} from '../../api/tickets.service';
import {TicketServiceService} from '../../api/ticket-service.service';
import {PaginateUser, User, UserService} from '../../api/user.service';
import {ClientLoginMethodComponent, LoginType} from '../../client-login-method/client-login-method.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ticket-selector',
  templateUrl: './ticket-selector.component.html',
  styleUrls: ['./ticket-selector.component.scss']
})
export class TicketSelectorComponent {
  @ViewChild('barberService') barberServiceItem: BarberServicesComponent;
  @ViewChild(ClientLoginMethodComponent) clientLoginMethodComp: ClientLoginMethodComponent;

  step = 1;
  users: PaginateUser;
  client: User;
  title: string;
  loginMethod: string;
  loginValue: string;
  ticketCreated: Ticket;

  constructor(private ticketsService: TicketsService,
              private ticketServiceService: TicketServiceService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
    const {step} = this.activatedRoute.snapshot.queryParams;
    if (step === '1') {
      const {method, value} = this.activatedRoute.snapshot.queryParams;
      this.loginMethod = method;
      this.loginValue = value;
      this.step = Math.trunc(step) || this.step;
    }
  }

  createTicket(): void {
    const servicesDataRequest = this.barberServiceItem.selectedValues
      .map((serviceId: number) => ({serviceId}));

    this.ticketsService
      .create({
        userId: this.client.id,
        active: true,
        ticket_services: servicesDataRequest
      })
      .subscribe((ticket: Ticket) => {
        this.ticketCreated = ticket;
        this.title = '';
        this.step = 3;
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
        this.step = 4;
      });
  }

  selectClient(event: any) {
    this.client = event;
    this.barberServiceItem.refreshServices(event.grown_state, event.gender);
    this.title = 'Seleccione el servicio que desea';
    this.step = 2;
  }
}
