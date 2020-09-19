'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groupe_Droit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Groupe_Droit.hasMany(models.Groupe)
      models.Groupe_Droit.hasMany(models.Droit)
    }
  };
  Groupe_Droit.init({
    idgroupe: DataTypes.INTEGER,
    iddroit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Groupe_Droit',
  });
  return Groupe_Droit;
};