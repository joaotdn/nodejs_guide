const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add product",
    pageTitle: "Add product",
    path: "/admin/add-product"
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.status(302).redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    products,
    docTitle: "Shopp",
    pageTitle: "List products",
    path: "/"
  });
};
