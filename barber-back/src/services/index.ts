import { Application } from '../declarations';
import users from './users/users.service';
import services from './services/services.service';
import tickets from './tickets/tickets.service';
import ticketServices from './ticket-services/ticket-services.service';
import usersIdTickets from './users/:id/tickets/tickets.service';
import ticketMonitor from './ticket-monitor/ticket-monitor.service';
import movements from './movements/movements.service';
import visits from './users/:id/visits/visits.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(services);
  app.configure(tickets);
  app.configure(ticketServices);
  app.configure(usersIdTickets);
  app.configure(ticketMonitor);
  app.configure(movements);
  app.configure(visits);
}
