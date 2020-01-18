const express = require("express");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", {
    products: adminData.products,
    docTitle: "Shop",
    pageTitle: "List products",
    path: "/"
  });
});

module.exports = router;
