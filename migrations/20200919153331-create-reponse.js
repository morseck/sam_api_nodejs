'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reponses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCommentaire: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Commentaires',
          key: 'id'
        }
      },
      text_reponse: {
        allowNull: false,
        type: Sequelize.STRING
      },
      auteur_reponse: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jaime_reponse: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      jaime_pas_reponse: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      signaler_reponse: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      is_sensurer_reponse: {
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
    await queryInterface.dropTable('Reponses');
  }
};