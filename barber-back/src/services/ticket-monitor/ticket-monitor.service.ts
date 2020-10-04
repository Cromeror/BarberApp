// Initializes the `ticket-monitor` service on path `/ticket-monitor`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { TicketMonitor } from './ticket-monitor.class';
import hooks from './ticket-monitor.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ticket-monitor': TicketMonitor & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ticket-monitor', new TicketMonitor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ticket-monitor');

  service.hooks(hooks);
}
