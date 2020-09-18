'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('services').then(attributes => {
      if (attributes.name) {
        return queryInterface.removeColumn('services', 'name');
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
