'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Droit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*
        Un Droit peut etre dans un ou plusieurs Groupe
        Un Groupe peut avoir un ou plusieurs Droit
        Dans la table associative "Groupe_Droit"
        (n...m)
       */
      models.Droit.belongsToMany(models.Groupe, {
        through: models.Groupe_Droit,
        foreignKey:{
          allowNull: false
        }
      })
    }
  };
  Droit.init({
    nom_droit: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Droit',
  });
  return Droit;
};