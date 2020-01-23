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
      let cart = !err
        ? JSON.parse(fileContent.toString())
        : { products: [], totalPrice: 0 };
      const { products } = cart;
      const productExistingIndex = products.findIndex(p => p.id === id);
      const productExists = products[productExistingIndex];
      let updatedProduct;

      if (productExists) {
        updatedProduct = { ...productExists };
        updatedProduct.qty += 1;
        products[productExistingIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        products = [...products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => console.log(err));
    });
  }
};
