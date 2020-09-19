'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsTo(models.CarteAcces)
    }
  };
  User.init({
    idgroupe: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    adresse: DataTypes.STRING,
    cni: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};