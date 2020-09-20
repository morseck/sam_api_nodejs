'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reponse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //Une Reponse appartient à un et un seul Commentaire (1...n)
      models.Reponse.belongsTo(models.Commentaire, {
        foreignKey:{
          allowNull: false
        }
      });
    }
  };
  Reponse.init({
    idCommentaire: DataTypes.INTEGER,
    text_reponse: DataTypes.STRING,
    auteur_reponse: DataTypes.STRING,
    jaime_reponse: DataTypes.INTEGER,
    jaime_pas_reponse: DataTypes.INTEGER,
    signaler_reponse: DataTypes.INTEGER,
    is_sensurer_reponse: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Reponse',
  });
  return Reponse;
};