import {HookContext} from '@feathersjs/feathers';

export default {
  before: {
    all: [],
    find: [
      async (context: HookContext) => {
        const models = context.app.get('sequelizeClient').models;
        context.params.sequelize = {
          where: {active: true},
          include: [{
            model: models.ticket_services,
            attributes: ['id'],
            include: [{model: models.services, attributes: {exclude: ['updatedAt', 'createdAt']}}]
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
