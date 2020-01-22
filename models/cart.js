const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the prevous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const productExistsIndex =
        cart.products && cart.products.findIndex(p => p.id === id);
      const productExists =
        productExistsIndex && cart.products[productExistsIndex];
      let updatedProduct;

      if (productExists) {
        updatedProduct = { ...productExists };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[productExistsIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products = cart.products ? [...cart.products, updatedProduct] : [updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => console.log(err));
    });
  }
};
