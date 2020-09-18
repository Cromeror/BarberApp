'use strict';
const DataTypes = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('services').then(attributes => {
      if (!attributes.name) {
        return queryInterface.addColumn('services', 'name', {type: DataTypes.STRING, allowNull: false});
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
