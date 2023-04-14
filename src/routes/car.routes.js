const { Router } = require("express");
const {
  createCar, getCar, addProductToCar
} = require("../controllers/car.controllers");

const router = Router();
router.post("/car", createCar);
router.post("/car/add-product", addProductToCar);
router.get("/car", getCar);

module.exports = router;
