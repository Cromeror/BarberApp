'use strict';

const DataTypes = require("sequelize").DataTypes;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('users')
      .then((attributes) => {
        if (!attributes.active) {
          return queryInterface.addColumn('users', 'active',
            {
              type: DataTypes.BOOLEAN,
              allowNull: true,
              defaultValue: true
            });
        }
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
