import {HookContext} from '@feathersjs/feathers';

export default {
  before: {
    all: [],
    find: [
      async (context: HookContext) => {
        const models = context.app.get('sequelizeClient').models;
        context.params.sequelize = {
          where: {active: true},
          include: [
            {model: models.users, attributes: ['id', 'name', 'last_name', 'age', 'gender', 'grown_state', 'nickname']},
            {
              model: models.ticket_services,
              attributes: ['id'],
              include: [{model: models.services, attributes: {exclude: ['updatedAt', 'createdAt']}}]
            }],
          raw: false
        };
        return context;
      }],
    get: [],
    create: [
      async (context: HookContext) => {
        const models = context.app.get('sequelizeClient').models;
        await models.tickets.count({where: {active: true}})
          .then((count: number) => {
            context.data = {...context.data, position: count + 1}
          });

        context.params.sequelize = {
          include: [{
            model: models.ticket_services
          }],
          raw: false
        };
        return context;
      }],
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
