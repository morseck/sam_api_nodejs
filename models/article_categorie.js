'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*
        TABLE ASSOCIATIVE "ARTICLE_CATEGORIE"
        Un article peut appartenir à une ou plusieur Categorie
        Une Categorie peut contenir un ou plusieurs articles
        (n..m)
       */
      models.Article_Categorie.hasMany(models.Article)
      models.Article_Categorie.hasMany(models.Categorie)
    }
  };
  Article_Categorie.init({
    idArticle: DataTypes.INTEGER,
    idCategorie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article_Categorie',
  });
  return Article_Categorie;
};