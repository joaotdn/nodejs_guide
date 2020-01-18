const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();
const { getAddProduct, postAddProduct } = productsController;

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

module.exports = router;
