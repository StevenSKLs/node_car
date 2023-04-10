"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // users.hasMany(models.orders, { foreignKey: "userId" });
    }
  }
  users.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      role: DataTypes.ENUM("ADMIN", "SELLER", "USER"),
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.firstname = user.firstname.toUpperCase();
        },
      },
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
