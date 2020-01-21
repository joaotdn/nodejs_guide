const Product = require("../models/products");

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      products,
      docTitle: "Shopp",
      pageTitle: "Shopp",
      path: "/"
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    docTitle: "Cart",
    pageTitle: "Cart"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    docTitle: "Checkout",
    pageTitle: "Checkout"
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/products-list", {
      products,
      docTitle: "Shopp",
      pageTitle: "List products",
      path: "/shop/products"
    });
  });
};
