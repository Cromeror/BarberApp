// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import {Model, Sequelize} from 'sequelize';
import {Application} from '../declarations';
import {HookReturn} from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const ticketServices = sequelizeClient.define('ticket_services', {}, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (ticketServices as any).associate = function (models: any): void {
    ticketServices.belongsTo(models.tickets);
    ticketServices.hasMany(models.services, {as: 'services'});
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return ticketServices;
}
