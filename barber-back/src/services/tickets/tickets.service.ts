// Initializes the `tickets` service on path `/tickets`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Tickets } from './tickets.class';
import createModel from '../../models/tickets.model';
import hooks from './tickets.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'tickets': Tickets & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tickets', new Tickets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tickets');

  service.hooks(hooks);
}
