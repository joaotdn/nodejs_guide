const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.status(302).redirect("/");
});

exports.routes = router;
exports.products = products;
