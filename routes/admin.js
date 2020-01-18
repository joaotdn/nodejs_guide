const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();
const products = [];

const { getAddProduct, postAddProduct } = productsController;

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

exports.routes = router;
exports.products = products;
