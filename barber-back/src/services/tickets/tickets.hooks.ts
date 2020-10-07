import {HookContext} from '@feathersjs/feathers';
import {Op} from 'sequelize';

export default {
  before: {
    all: [],
    find: [
      async (context: HookContext) => {
        let query: any = context.params.query;
        const {active} = query;
        const activeParam = active ? active.toString()?.toLowerCase() : active;
        if (/(false)|(true)/g.test(activeParam)) {
          query.active = activeParam === 'true' ? '1' : '0';
        }

        const models = context.app.get('sequelizeClient').models;
        context.params.sequelize = {
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
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth().toString().padStart(2, "0");
        const day = today.getDay().toString().padStart(2, "0");
        const todayStr = `${year}-${month}-${day} 00:00:00`;

        await models.tickets.count({where: {createdAt: {[Op.gte]: todayStr}}})
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
