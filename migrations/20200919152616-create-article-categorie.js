'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Article_Categories', {
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
      idCategorie: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Categories',
          key: 'id'
        }
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
    await queryInterface.dropTable('Article_Categories');
  }
};