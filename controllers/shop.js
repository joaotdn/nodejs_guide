const Product = require("../models/products");
const Cart = require("../models/cart");

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
      path: "/products"
    });
  });
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
  Product.findById(productId, product => {
    res.render("shop/product-detail", {
      product,
      docTitle: product.title,
      pageTitle: product.title,
      path: "/products"
    });
  });
};

exports.postCart = (req, res, next) => {
  const { productId } = req.body;
  Product.findById(productId, product => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};
