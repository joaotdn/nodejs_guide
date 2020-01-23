const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();
const { getAddProduct, postAddProduct, getProducts, getEditProducts, postEditProducts } = adminController;

router.get("/add-product", getAddProduct);
router.get("/products", getProducts);
router.post("/add-product", postAddProduct);
router.get("/edit-product/:productId", getEditProducts);
router.post("/edit-product/:productId", postEditProducts);

module.exports = router;
