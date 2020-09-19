'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CarteAcces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id'
        }
      },
      idGroupe: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Groupes',
          key: 'id'
        }
      },
      numero_carte: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      disponible_carte: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('CarteAcces');
  }
};