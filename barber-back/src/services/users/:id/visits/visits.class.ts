import {Id, NullableId, Params, ServiceMethods} from '@feathersjs/feathers';
import {Application} from '../../../../declarations';
import {Op, Sequelize} from 'sequelize';
import moment = require('moment');

interface Data {
}

interface ServiceOptions {
}

export class Visits implements ServiceMethods<Data> {
  [key: string]: any;

  app: Application;
  options: ServiceOptions;
  sequelize: Sequelize;

  constructor(options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
    this.sequelize = app.get('sequelizeClient');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find(params?: Params): Promise<string> {
    if (!params?.route?.id || params?.route?.id === 'undefined') {
      throw new Error('Id de usuario inválido');
    }

    const users = this.sequelize.models.users;
    const tickets = this.sequelize.models.tickets;

    const month = (moment().month() + 1).toString().padStart(2, '0');
    const year = moment().year();
    const currentMonth = moment(year + '-' + month + '-01T00:00:00-05:00');

    return tickets.count({
      where: {
        userId: params?.route?.id,
        createdAt: {
          [Op.gte]: currentMonth
        },
        status: "served"
      }
    }).then((count: number) => {
      return count.toString();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(id: Id, params?: Params): Promise<Data> {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(data: Data, params?: Params): Promise<Data> {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: NullableId, data: Data, params?: Params): Promise<Data> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch(id: NullableId, data: Data, params?: Params): Promise<Data> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: NullableId, params?: Params): Promise<Data> {
    return {id};
  }
}
