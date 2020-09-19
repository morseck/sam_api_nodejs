'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarteAcces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CarteAcces.hasOne(models.User, {
        foreignKey:{
          allowNull: false
        }
      });

      models.CarteAcces.belongsTo(models.Groupe, {
        foreignKey:{
          allowNull: false
        }
      });

      models.CarteAcces.belongsToMany(models.FeuillePointage, {
        through: models.CarteAcces_FeuillePointage,
        foreignKey:{
          allowNull: false
        }
      })
    }
  };
  CarteAcces.init({
    idUser: DataTypes.INTEGER,
    idGroupe: DataTypes.INTEGER,
    numero_carte: DataTypes.INTEGER,
    disponible_carte: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CarteAcces',
  });
  return CarteAcces;
};