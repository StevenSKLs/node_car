const { product } = require("../models");

class productServices {
  static async add(productData) {
    try {
      const result = await product.create(productData);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = productServices;
