// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import {DataTypes, Model, Sequelize} from 'sequelize';
import {Application} from '../declarations';
import {HookReturn} from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const tickets = sequelizeClient.define('tickets', {
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'in_queue'
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (tickets as any).associate = function (models: any): void {
    tickets.belongsTo(models.users);
    tickets.hasMany(models.ticket_services);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tickets;
}
