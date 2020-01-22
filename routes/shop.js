const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

const {
  getIndex,
  getProducts,
  getCart,
  getCheckout,
  getOrders,
  getProduct,
  postCart
} = shopController;

router.get("/", getIndex);
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.get("/cart", getCart);
router.post("/cart", postCart);
router.get("/checkout", getCheckout);
router.get("/orders", getOrders);

module.exports = router;
