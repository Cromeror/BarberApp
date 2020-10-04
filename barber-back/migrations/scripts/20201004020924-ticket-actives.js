'use strict';

const defaultService = [
  {
    grown_state: "adult",
    name: "Corte completo",
    price: 10000,
    gender: "man",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  },
  {
    grown_state: "adult", name: "Corte sencillo", price: 8000, gender: "man",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  },
  {
    grown_state: "adult", name: "Barba", price: 4000, gender: "man",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  },
  {
    grown_state: "adult", name: "Cerquillo", price: 2000, gender: "man",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  },
  {
    grown_state: "adult", name: "Cejas", price: 2000, gender: "woman",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  },
  {
    grown_state: "teen", name: "Corte completo", price: 8000, gender: "man",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  },
  {
    grown_state: "teen",
    name: "Corte sencillo",
    price: 7000,
    gender: "man",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  },
  {
    grown_state: "kid",
    name: "Corte",
    price: 6000,
    gender: "man",
    createdAt: "2020-09-18",
    updatedAt: "2020-10-04"
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.describeTable('services')
      .then(() => {
        return queryInterface.bulkInsert('services', defaultService, {});
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
