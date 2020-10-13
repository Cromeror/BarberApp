'use strict';

const DataTypes = require("sequelize").DataTypes;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('users')
      .then((attributes) => {
        if (!attributes.type) {
          return queryInterface.addColumn('users', 'type',
            {
              type: DataTypes.STRING,
              allowNull: false,
              defaultValue: 'client'
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
