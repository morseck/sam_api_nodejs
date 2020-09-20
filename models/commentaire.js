'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Un Commentaire peut avoir une ou plusieur Reponse (1...n)
      models.Commentaire.hasMany(models.Reponse);

      //Un commentaire appartient à un et un seul article (1...n)
      models.Commentaire.belongsTo(models.Article, {
        foreignKey:{
          allowNull: false
        }
      });
    }
  };
  Commentaire.init({
    idArticle: DataTypes.INTEGER,
    text_commentaire: DataTypes.STRING,
    auteur_commentaire: DataTypes.STRING,
    jaime_commentaire: DataTypes.INTEGER,
    jaime_pas_commentaire: DataTypes.INTEGER,
    signaler_commentaire: DataTypes.INTEGER,
    is_sensurer_commentaire: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Commentaire',
  });
  return Commentaire;
};