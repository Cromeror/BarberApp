import {HookContext} from '@feathersjs/feathers';

export default {
  before: {
    all: [],
    find: [
      async (context: HookContext) => {
        const models = context.app.get('sequelizeClient').models;
        context.params.sequelize = {
          include: [{
            model: models.ticket_services,
            include: [{model: models.services, as: 'services'}]
          }],
          raw: false
        };
        return context;
      }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
