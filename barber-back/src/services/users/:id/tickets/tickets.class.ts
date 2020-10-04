import {Id, NullableId, Paginated, Params, ServiceMethods} from '@feathersjs/feathers';
import {Application} from '../../../../declarations';
import {Sequelize} from 'sequelize';

interface Data {
}

interface ServiceOptions {
}

export class Tickets implements ServiceMethods<Data> {
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
  async find(params?: Params): Promise<Data[] | Paginated<Data>> {
    if (!params?.route?.id || params?.route?.id === 'undefined') {
      throw new Error('Id de usuario inválido');
    }

    const users = this.sequelize.models.users;
    const tickets = this.sequelize.models.tickets;

    return users.findAll({
      attributes: ["id", "name", "last_name"],
      where: {id: params?.route?.id},
      include: [{
        model: tickets,
        where: {active: true}
      }]
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(id: Id, params?: Params): Promise<Data> {
    throw new Error('No implementado')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(data: Data, params?: Params): Promise<Data> {
    throw new Error('No implementado')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: NullableId, data: Data, params?: Params): Promise<Data> {
    throw new Error('No implementado')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch(id: NullableId, data: Data, params?: Params): Promise<Data> {
    throw new Error('No implementado')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: NullableId, params?: Params): Promise<Data> {
    throw new Error('No implementado')
  }
}
