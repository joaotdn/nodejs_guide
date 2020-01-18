const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add product',
    pageTitle: 'Add product',
    path: '/admin/add-product'
  });
});

router.post("/add-product", (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.status(302).redirect("/");
});

exports.routes = router;
exports.products = products;
