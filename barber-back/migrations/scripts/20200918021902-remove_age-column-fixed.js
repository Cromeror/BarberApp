'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('services').then(attributes => {
      if (attributes.age) {
        return queryInterface.removeColumn('services', 'age');
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
