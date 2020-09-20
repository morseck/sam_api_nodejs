'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here

      //Un User a une et une seule CarteAcces (1...1)
      models.User.belongsTo(models.CarteAcces);

      //Un User peut faire avoir un ou plusieurs Articles (1...n )
      models.User.hasMany(models.Article);
    }
  };
  User.init({
    //idgroupe: DataTypes.INTEGER,
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