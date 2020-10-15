import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import {HookContext} from '@feathersjs/feathers';
import {Op} from 'sequelize';
import moment = require('moment');
// Don't remove this comment. It's needed to format import lines nicely.

const {authenticate} = feathersAuthentication.hooks;
const {hashPassword, protect} = local.hooks;

async function cleanData(context: HookContext) {
  for (const key in context.data) {
    if (context.data[key] === undefined || context.data[key] === null) {
      delete context.data[key];
    }
  }
  return context;
}

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

        const month = (moment().month() + 1).toString().padStart(2, '0');
        const year = moment().year();
        const currentMonth = moment(year + '-' + month + '-01T00:00:00-05:00');

        const Sequelize = context.app.get('sequelizeClient');
        const models = Sequelize.models;
        context.params.sequelize = {
          include: [{
            model: models.tickets,
            required: false
            ,
            where: {
              createdAt: {
                [Op.gte]: currentMonth
              },
              status: "served"
            }
          }],
          raw: false
        };

        return context;
      }/*authenticate('jwt')*/],
    get: [authenticate('jwt')],
    create: [cleanData, hashPassword('password')],
    update: [hashPassword('password')/*, authenticate('jwt')*/],
    patch: [cleanData, hashPassword('password')/*, authenticate('jwt')*/],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
