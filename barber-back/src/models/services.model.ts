// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import {Model, Sequelize} from 'sequelize';
import {Application} from '../declarations';
import {HookReturn} from 'sequelize/types/lib/hooks';

const DataTypes = require('sequelize').DataTypes;
const attributes = {
  name: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  gender: {type: DataTypes.STRING, allowNull: false},
  grown_state: {type: DataTypes.STRING, allowNull: false, defaultValue: 'adult'}
};

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const services = sequelizeClient.define('services', attributes, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (services as any).associate = function (models: any): void {
    // services.belongsToMany(models.tickets, {as: 'TicketServices', through: ticketServices});
    // models.tickets.belongsToMany(models.services, {as: 'TicketServices', through: ticketServices});
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return services;
}
