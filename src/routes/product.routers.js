const { Router } = require("express");
const { createProduct, getProduct, putProduct } = require("../controllers/product.controllers");

const router = Router();

router.post("/product", createProduct);
router.get("/product", getProduct)
router.put("/product", putProduct)

module.exports = router;
