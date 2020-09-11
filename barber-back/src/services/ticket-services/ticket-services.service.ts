// Initializes the `ticketServices` service on path `/ticket-services`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { TicketServices } from './ticket-services.class';
import createModel from '../../models/ticket-services.model';
import hooks from './ticket-services.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ticket-services': TicketServices & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ticket-services', new TicketServices(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ticket-services');

  service.hooks(hooks);
}
