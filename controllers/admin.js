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
  const product = new Product(null, title, imageUrl, price, description);
  product
    .save()
    .then(() => {
      res.status(302).redirect("/");
    })
    .catch(e => console.error(e));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/list-products", {
      products,
      docTitle: "Products",
      pageTitle: "Products",
      path: "/admin/products"
    });
  });
};

exports.getEditProducts = (req, res, next) => {
  const editMode = req.query.edit;
  const { productId } = req.params;
  if (!editMode) {
    res.redirect("/");
  }

  Product.findById(productId, product => {
    !product && res.redirect("/");
    res.render("admin/edit-product", {
      docTitle: "Edit product",
      pageTitle: "Edit product",
      path: "/admin/edit-product",
      editing: editMode,
      product
    });
  });
};

exports.postEditProducts = (req, res, next) => {
  const { title, imageUrl, price, description, productID } = req.body;
  const product = new Product(productID, title, imageUrl, price, description);
  product.save();
  res.redirect("/admin/products");
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.deleteById(productId);
  res.redirect("/admin/products");
};