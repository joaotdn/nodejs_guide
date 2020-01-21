const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

const { getIndex, getProducts, getCart, getCheckout, getOrders, getProductId } = shopController;

router.get("/", getIndex);
router.get("/products", getProducts);
router.get("/products/:id", getProductId);
router.get("/cart", getCart);
router.get("/checkout", getCheckout);
router.get("/orders", getOrders);

module.exports = router;
