'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Articles', {
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
      titre_article: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contenu_article: {
        allowNull: false,
        type: Sequelize.STRING
      },
      attachment: {
        allowNull: true,
        type: Sequelize.STRING
      },
      isValide: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      date_publication: {
        allowNull: false,
        type: Sequelize.DATE
      },
      type: {
        allowNull: true,
        type: Sequelize.STRING
      },
      source_article: {
        allowNull: true,
        type: Sequelize.STRING
      },
      references_article: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tags_article: {
        allowNull: true,
        type: Sequelize.STRING
      },
      jaime_article: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      jaime_pas_article: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      disponible_article: {
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
    await queryInterface.dropTable('Articles');
  }
};