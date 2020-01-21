const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add product",
    pageTitle: "Add product",
    path: "/admin/add-product"
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.status(302).redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/product-list", {
      products,
      docTitle: "Products",
      pageTitle: "Products",
      path: "/admin/products"
    });
  });
};
