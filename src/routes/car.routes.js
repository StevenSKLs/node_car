const { Router } = require("express");
const {
  createCar
} = require("../controllers/car.controllers");

const router = Router();

// console.log(addProductToOrder);

router.post("/car", createCar);
// router.post("/orders/add-product", addProductToOrder);

module.exports = router;
