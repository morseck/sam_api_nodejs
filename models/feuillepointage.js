'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeuillePointage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /*
        Une CarteAccess peut etre dans une ou plusieurs FeuillePointage
        Une FeuillePointage peut enregistrer une ou plusieurs CarteAcces
        Dans la table association "CarteAcces_FeuillePointage"
        (n...m)
       */
      models.FeuillePointage.belongsToMany(models.CarteAcces, {
        through: models.CarteAcces_FeuillePointage,
        foreignKey:{
          allowNull: false
        }
      })
    }
  };
  FeuillePointage.init({
    date_feuille_pointage: DataTypes.DATE,
    disponible_feuille_pointage: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FeuillePointage',
  });
  return FeuillePointage;
};