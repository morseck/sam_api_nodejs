'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CarteAcces_FeuillePointages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCarteAccess: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'CarteAcces',
          key: 'id'
        }
      },
      idFeuillePointage: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'FeuillePointages',
          key: 'id'
        }
      },
      heure_arrive: {
        allowNull: false,
        type: Sequelize.DATE
      },
      heure_depart: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CarteAcces_FeuillePointages');
  }
};