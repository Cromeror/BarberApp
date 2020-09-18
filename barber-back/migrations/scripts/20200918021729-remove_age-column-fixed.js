'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('services').then(attributes => {
      if (attributes.age) {
        return queryInterface.removeColumn('services', 'age');
      }
    });
  }
};
