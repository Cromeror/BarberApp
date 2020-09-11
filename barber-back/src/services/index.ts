import { Application } from '../declarations';
import users from './users/users.service';
import services from './services/services.service';
import tickets from './tickets/tickets.service';
import ticketServices from './ticket-services/ticket-services.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(services);
  app.configure(tickets);
  app.configure(ticketServices);
}
