const { Router } = require("express");
const {
  createCar, getCar
} = require("../controllers/car.controllers");

const router = Router();

// console.log(addProductToOrder);

router.post("/car", createCar);
// router.post("/orders/add-product", addProductToOrder);
router.get("/car", getCar);

module.exports = router;
