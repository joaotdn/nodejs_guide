const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

const { getIndex, getProducts, getCart, getCheckout } = shopController;

router.get("/", getIndex);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.get("/checkout", getCheckout);

module.exports = router;
