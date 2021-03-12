'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Review.belongsTo(models.Place, { onDelete: "set null" });
    }
  };
  Review.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};