'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarteAcces_FeuillePointage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*
        TABLE ASSOCIATIVE "CarteAcces_FeuillePointage"
       Une CarteAccess peut etre dans une ou plusieurs FeuillePointage
       Une FeuillePointage peut enregistrer une ou plusieurs CarteAcces
       (n...m)
      */
      models.CarteAcces_FeuillePointage.hasMany(models.CarteAcces)
      models.CarteAcces_FeuillePointage.hasMany(models.FeuillePointage)
    }
  };
  CarteAcces_FeuillePointage.init({
    idCarteAccess: DataTypes.INTEGER,
    idFeuillePointage: DataTypes.INTEGER,
    heure_arrive: DataTypes.DATE,
    heure_depart: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CarteAcces_FeuillePointage',
  });
  return CarteAcces_FeuillePointage;
};