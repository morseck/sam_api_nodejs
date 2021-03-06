'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groupe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Un Groupe peut avoir une ou plusieurs CarteAcces (1...n)
      models.Groupe.hasMany(models.CarteAcces)

      /*
        Un Groupe peut avoir un ou plusieurs Droit
        Un Droit peut etre dans un ou plusieurs Groupe
        Dans la table associative "Groupe_Droit"
        (n...m)
       */
      models.Groupe.belongsToMany(models.Droit, {
        through: models.Groupe_Droit,
        foreignKey:{
          allowNull: false
        }
      })
    }
  };
  Groupe.init({
    nom_groupe: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Groupe',
  });
  return Groupe;
};