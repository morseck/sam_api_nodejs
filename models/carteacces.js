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
      //Une CarteAcces peut avoir un et un seul User (1...1)
      models.CarteAcces.belongsTo(models.User, {
        foreignKey:{
          allowNull: false
        }
      });

      //Une CarteAccess est dans une Seule Groupe (1...n)
      models.CarteAcces.belongsTo(models.Groupe, {
        foreignKey:{
          allowNull: false
        }
      });

      /*
        Une CarteAccess peut etre dans une ou plusieurs FeuillePointage
        Une FeuillePointage peut enregistrer une ou plusieurs CarteAcces
        Dans la table association "CarteAcces_FeuillePointage"
        (n...m)
       */
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