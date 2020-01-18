const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

const { getProducts } = productsController;

router.get("/", getProducts);

module.exports = router;
