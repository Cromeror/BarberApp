// Initializes the `users/:id/tickets` service on path `/users/:id/tickets`
import {ServiceAddons} from '@feathersjs/feathers';
import {Application} from '../../../../declarations';
import {Tickets} from './tickets.class';
import hooks from './tickets.hooks';

// Add this service to the service type index
declare module '../../../../declarations' {
  interface ServiceTypes {
    'users/{id}/tickets': Tickets & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users/:id/tickets', new Tickets(options, app));
}
