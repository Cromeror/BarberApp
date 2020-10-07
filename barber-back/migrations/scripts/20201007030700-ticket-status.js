'use strict';

const DataTypes = require("sequelize").DataTypes;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('tickets')
      .then(() => {
        return queryInterface.addColumn('tickets', 'status',
          {
            type: DataTypes.STRING,
            defaultValue: 'in_queue'
          });
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
