'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.user, { foreignKey:"id", target_key:"userId" })
      product.hasMany(models.productincar, { foreignKey: "productId" })
    }
  }
  product.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    available: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};