'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productincar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association her
      productincar.belongsTo(models.car, { foreignKey:"id", target_key:"carId" }) 
      productincar.belongsTo(models.product, { foreignKey:"id", target_key:"productId" })
    }
    
  }
  productincar.init({
    carId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productincar',
  });
  return productincar;
};