// Initializes the `playlist` service on path `/playlist`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Playlist } from './playlist.class';
import createModel from '../../models/playlist.model';
import hooks from './playlist.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'playlist': Playlist & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/playlist', new Playlist(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('playlist');

  service.hooks(hooks);
}
