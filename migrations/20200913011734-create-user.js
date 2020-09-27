'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      /*idgroupe: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Groupes',
          key: 'id'
        }
      },*/
      nom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      prenom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      telephone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      adresse: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cni: {
        allowNull: true,
        type: Sequelize.STRING
      },
      disponible_user: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('Users');
  }
};