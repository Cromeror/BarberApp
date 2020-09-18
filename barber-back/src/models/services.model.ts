// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import {DataTypes, Model, Sequelize} from 'sequelize';
import {Application} from '../declarations';
import {HookReturn} from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const services = sequelizeClient.define('services', {
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    grown_state: {type: DataTypes.STRING, allowNull: false, defaultValue: 'adult'},
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (services as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return services;
}
