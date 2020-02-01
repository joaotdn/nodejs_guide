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
      res.redirect("/admin/products")
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
  const editMode = req.query.edit;
  const { productId } = req.params;
  if (!editMode) {
    res.redirect("/");
  }

  Product.findById(productId).then(([product]) => {
    !product[0] && res.redirect("/");
    res.render("admin/edit-product", {
      docTitle: "Edit product",
      pageTitle: "Edit product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product[0]
    });
  });
};

exports.postEditProducts = (req, res, next) => {
  const { title, imageUrl, price, description, productID } = req.body;
  const product = new Product(productID, title, imageUrl, price, description);
  product
    .update()
    .then(() => res.redirect("/admin/products"))
    .catch(e => console.error(e));
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.deleteById(productId)
    .then(() => res.redirect("/admin/products"))
    .catch(e => console.error(e));
};
