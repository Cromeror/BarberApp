import {Id, NullableId, Paginated, Params, ServiceMethods} from '@feathersjs/feathers';
import {Application} from '../../declarations';
import {Sequelize} from 'sequelize';

interface DataResponse {

}

interface CreateNewTicket {
  userId: number;
  services: number[];
}

interface ServiceOptions {
}

export class TicketMonitor implements ServiceMethods<DataResponse> {
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
  async find(params?: Params): Promise<DataResponse[] | Paginated<DataResponse>> {
    const users = this.sequelize.models.users;
    const tickets = this.sequelize.models.tickets;

    return users.findAll({
      attributes: ["id", "name", "last_name"],
      include: [{
        model: tickets,
        where: {active: true}
      }]
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(id: Id, params?: Params): Promise<DataResponse> {
    throw new Error('No implementado')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(data: CreateNewTicket, params?: Params): Promise<any> {
    const users = this.sequelize.models.users;
    const tickets: any = this.sequelize.models.tickets;
    const services: any = this.sequelize.models.services;
    const ticketServices: any = this.sequelize.models.ticketServices;

    console.log(tickets)
    return users.findByPk(data.userId)
      .then((user: any) => {
        return tickets.count({where: {active: true}})
          .then((lastPosition: number) => {
              return tickets.create(
                {
                  position: lastPosition + 1,
                  userId: user.id,
                  finish_date: null,
                  start_date: null,
                  active: true
                })
                .then((d: any) => {
                  console.log(d);
                  return ticketServices.create({
                    serviceId: 2,
                    ticketId: 2
                  })
                });
            }
          );
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: NullableId, data: DataResponse, params?: Params): Promise<DataResponse> {
    throw new Error('No implementado')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch(id: NullableId, data: DataResponse, params?: Params): Promise<DataResponse> {
    throw new Error('No implementado')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: NullableId, params?: Params): Promise<DataResponse> {
    throw new Error('No implementado')
  }
}
