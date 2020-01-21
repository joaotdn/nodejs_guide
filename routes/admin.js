const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();
const { getAddProduct, postAddProduct, getProducts } = adminController;

router.get("/add-product", getAddProduct);
router.get("/products", getProducts);
router.post("/add-product", postAddProduct);

module.exports = router;
