const productServices = require("../services/product.services");
const { product } = require("../models");

const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    await productServices.add(productData);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const get_Product = await product.findAll({
      attributes: ["id", "name", "userId", "description","price", "available", "status", "img"],
    })
    res.json(get_Product)
  } catch (error) {
    next(error)
  }
};


const putProduct = async (req, res, next) => {
  try {
  const { id } = req.params;
  const data = req.body;
  await product.update(data, {
    where: { id },
  });
  res.status(204).send()
  } catch (error) {
    next(error)
  }
};


module.exports = {
  createProduct,
  getProduct,
  putProduct
};
