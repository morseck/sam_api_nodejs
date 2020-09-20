'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commentaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idArticle: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Articles',
          key: 'id'
        }
      },
      text_commentaire: {
        allowNull: false,
        type: Sequelize.STRING
      },
      auteur_commentaire: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jaime_commentaire: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      jaime_pas_commentaire: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      signaler_commentaire: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      is_sensurer_commentaire: {
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
    await queryInterface.dropTable('Commentaires');
  }
};