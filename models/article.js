'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //Un article a un ou plusier commentaire (1...n)
      models.Article.hasMany(models.Commentaire);

      //Un User peut avoir un ou plusiers Article (1...n)
      models.Article.belongsTo(models.User, {
        foreignKey:{
          allowNull: false
        }
      });

      /*
        Un article peut appartenir à une ou plusieur Categorie
        Une Categorie peut contenir un ou plusieurs articles
        Dans la table associative "Article_Categorie"
        (n...m)
       */
      models.Article.belongsToMany(models.Categorie, {
        through: models.Article_Categorie,
        foreignKey:{
          allowNull: false
        }
      });
    }
  };
  Article.init({
    idUser: DataTypes.INTEGER,
    titre_article: DataTypes.STRING,
    contenu_article: DataTypes.STRING,
    attachment: DataTypes.STRING,
    isValide: DataTypes.BOOLEAN,
    date_publication: DataTypes.DATE,
    type: DataTypes.STRING,
    source_article: DataTypes.STRING,
    references_article: DataTypes.STRING,
    tags_article: DataTypes.STRING,
    jaime_article: DataTypes.INTEGER,
    jaime_pas_article: DataTypes.INTEGER,
    disponible_article: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};