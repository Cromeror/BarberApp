import {SequelizeServiceOptions, Service} from 'feathers-sequelize';
import {Application} from '../../declarations';

export class TicketServices extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}