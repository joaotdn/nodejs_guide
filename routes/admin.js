const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();
const { getAddProduct, postAddProduct } = adminController;

router.get("/add-product", getAddProduct);
router.post("/add-product", postAddProduct);

module.exports = router;
