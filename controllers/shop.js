const Product = require("../models/products");
const Cart = require("../models/cart");

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("shop", {
        products,
        docTitle: "Home",
        pageTitle: "Home",
        path: "/"
      });
    })
    .catch(e => console.error(e));
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(p => p.id === product.id);
        if (cartProductData) {
          cartProducts.push({
            productData: product,
            qty: cartProductData.qty
          });
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        docTitle: "Cart",
        pageTitle: "Cart",
        cartProducts
      });
    });
  });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const { productID } = req.body;
  Product.findById(productID)
    .then(product => {
      Cart.deleteProduct(productID, product.price);
      res.redirect("/cart");
    })
    .catch(e => console.log(e));
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    docTitle: "Checkout",
    pageTitle: "Checkout"
  });
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("shop/products-list", {
        products,
        docTitle: "Products",
        pageTitle: "Products",
        path: "/admin/products"
      });
    })
    .catch(e => console.error(e));
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    docTitle: "Your orders",
    pageTitle: "Your orders",
    path: "/orders"
  });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.id;

  Product.findByPk(productId)
    .then(product => {
      res.render("shop/product-detail", {
        product,
        docTitle: product.title,
        pageTitle: product.title,
        path: "/products"
      });
    })
    .catch(e => console.error(e));
};

exports.postCart = (req, res, next) => {
  const { productId } = req.body;
  Product.findByPk(productId)
    .then(product => {
      Cart.addProduct(productId, product.price);
      res.redirect("/cart");
    })
    .catch(e => console.log(e));
};
