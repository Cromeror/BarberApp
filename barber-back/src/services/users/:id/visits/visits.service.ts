// Initializes the `visits` service on path `/users/:id/visits`
import {ServiceAddons} from '@feathersjs/feathers';
import {Application} from '../../../../declarations';
import {Visits} from './visits.class';

// Add this service to the service type index
declare module '../../../../declarations' {
  interface ServiceTypes {
    'users/:id/visits': Visits & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users/:id/visits', new Visits(options, app));
}
