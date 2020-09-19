'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Groupe_Droits', {
      /*id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },*/
      idgroupe: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Groupes',
          key: 'id'
        }
      },
      iddroit: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Droits',
          key:  'id'
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
    await queryInterface.dropTable('Groupe_Droits');
  }
};