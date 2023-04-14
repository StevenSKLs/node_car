const { car } = require("../models");
const { productincar } = require("../models");

const createCar = async (req, res, next) => {
  try {
    const carInfo = req.body;
    // {tableId, userId}
    await car.create(carInfo);
    res.status(201).send();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getCar = async (req, res, next) => {
  try {
    const car_all = await car.findAll({
      attributes: ["id", "userId","totalPrice"],
    })
    res.json(car_all)
  } catch (error) {
    next(error)
  }
};
const addProductToCar = async (req, res, next) => {
  try {
    const { carId, productId, quantity, price } = req.body;
    await productincar.create({ carId, productId, quantity, price });
    const total = price * quantity;
    await car.increment({ total }, { where: { id: carId } });
    res.json({
      message: "Product added successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};


module.exports = {
  createCar,
  getCar,
  addProductToCar
};
