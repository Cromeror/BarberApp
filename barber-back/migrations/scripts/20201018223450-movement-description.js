'use strict';

const DataTypes = require("sequelize").DataTypes;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('movements')
      .then((attributes) => {
        if (!attributes.description) {
          return queryInterface.addColumn('movements', 'description',
            {
              type: DataTypes.STRING,
              allowNull: false
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
