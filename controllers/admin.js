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
  Product.create({ title, imageUrl, price, description })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch(e => console.log(e));
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("admin/list-products", {
        products,
        docTitle: "Products",
        pageTitle: "Products",
        path: "/admin/products"
      });
    })
    .catch(e => console.error(e));
};

exports.getEditProducts = (req, res, next) => {
  const { productId } = req.params;

  Product.findByPk(productId).then(product => {
    res.render("admin/edit-product", {
      docTitle: "Edit product",
      pageTitle: "Edit product",
      path: "/admin/edit-product",
      product
    });
  });
};

exports.postEditProducts = (req, res, next) => {
  const { title, imageUrl, price, description, productID } = req.body;

  Product.findByPk(productID)
    .then(async p => {
      p.title = title;
      p.imageUrl = imageUrl;
      p.price = price;
      p.description = description;
      await p.save();

      res.redirect("/admin/products");
    })
    .catch(e => console.error(e));
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;

  Product.findByPk(productId)
    .then(async p => {
      await p.destroy();
      res.redirect("/admin/products");
    })
    .catch(e => console.error(e));
};
