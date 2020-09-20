'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /*
        Un article peut appartenir à une ou plusieur Categorie
        Une Categorie peut contenir un ou plusieurs articles
        Dans la table associative "Article_Categorie"
        (n...m)
       */
      models.Categorie.belongsToMany(models.Article, {
        through: models.Article_Categorie,
        foreignKey:{
          allowNull: false
        }
      });
    }
  };
  Categorie.init({
    nom_categorie: DataTypes.STRING,
    disponible_categorie: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Categorie',
  });
  return Categorie;
};